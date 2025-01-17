const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Oran1996',
  database: 'marvel-web',
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Initialize the Express app
const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Enable JSON parsing for request bodies

/**
 * Endpoint for user signup.
 * Expects fullName, userName, email, and password in the request body.
 */
app.post('/signup', (req, res) => {
  const { fullName, userName, email, password } = req.body;

  const checkQuery = 'SELECT COUNT(*) as count FROM users WHERE UserName = ?';
  const checkValues = [userName];

  connection.query(checkQuery, checkValues, (checkError, checkResults) => {
    if (checkError) {
      console.error('Error executing MySQL query:', checkError);
      return res.status(500).json({ error: 'Database query error' });
    }

    if (checkResults[0].count > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const insertQuery = 'INSERT INTO users (FullName, UserName, Email, Password) VALUES (?, ?, ?, ?)';
    const insertValues = [fullName, userName, email, password];

    connection.query(insertQuery, insertValues, (insertError, _insertResults) => {
      if (insertError) {
        console.error('Error executing MySQL query:', insertError);
        return res.status(500).json({ error: 'Database query error' });
      }

      return res.json({ message: 'User signup successful' });
    });
  });
});

/**
 * Endpoint for user login.
 * Expects userName and password in the request body.
 */
app.post('/login', (req, res) => {
  const { userName, password } = req.body;
  console.log('Received parameters:', userName, password);

  const query = 'SELECT COUNT(*) as count FROM users WHERE UserName = ? AND Password = ?';
  const values = [userName, password];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      return res.status(500).json({ error: 'Database query error' });
    }

    if (results[0].count === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    return res.json({ message: 'User login successful' });
  });
});

/**
 * Endpoint for retrieving the leaderboard data.
 * Returns an array of users with their scores, ordered by score in descending order.
 */
app.get('/leaderboard', (req, res) => {
  connection.query('SELECT * FROM leaderboard ORDER BY score DESC', (error, results) => {
    if (error) {
      console.error('Error retrieving leaderboard data:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const leaderboardData = results.map(row => ({
        username: row.username,
        score: row.score
      }));
      res.json(leaderboardData);
    }
  });
});

/**
 * Endpoint for retrieving a user's score in the trivia game.
 * Expects a username as a query parameter.
 */
app.get('/trivia', (req, res) => {
  const username = req.query.username;

  const query = 'SELECT score FROM leaderboard WHERE username = ?';
  const values = [username];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error retrieving score:', error);
      return res.status(500).json({ error: 'Failed to retrieve score' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'User score not found' });
    }

    const score = results[0].score;
    return res.json({ score });
  });
});

/**
 * Endpoint for updating or adding a user's score in the trivia game.
 * Expects username and score in the request body.
 */
app.post('/trivia', (req, res) => {
  const { username, score } = req.body;

  const selectQuery = 'SELECT * FROM leaderboard WHERE username = ?';
  const selectValues = [username];

  console.log('Received leaderboard update request:', username, score);

  connection.query(selectQuery, selectValues, (selectError, selectResults) => {
    if (selectError) {
      console.error('Error executing MySQL query:', selectError);
      return res.status(500).json({ error: 'Database query error' });
    }

    if (selectResults.length > 0) {
      // User already exists, update the score
      const updateQuery = 'UPDATE leaderboard SET score = ? WHERE username = ?';
      const updateValues = [score, username];

      console.log('Updating score for existing user:', username, score);

      connection.query(updateQuery, updateValues, (updateError, updateResults) => {
        if (updateError) {
          console.error('Error executing MySQL query:', updateError);
          return res.status(500).json({ error: 'Database query error' });
        }

        console.log('Score updated successfully');

        return res.json({ message: 'Score updated successfully' });
      });
    } else {
      // User doesn't exist, add a new score
      const insertQuery = 'INSERT INTO leaderboard (username, score) VALUES (?, ?)';
      const insertValues = [username, score];

      console.log('Adding new score for user:', username, score);

      connection.query(insertQuery, insertValues, (insertError, _insertResults) => {
        if (insertError) {
          console.error('Error executing MySQL query:', insertError);
          return res.status(500).json({ error: 'Database query error' });
        }

        console.log('Score added successfully');

        return res.json({ message: 'Score added successfully' });
      });
    }
  });
});

/**
 * Endpoint for updating the user's avatar.
 * Expects username and avatar in the request body.
 */
app.post('/avatar', (req, res) => {
  const { username, avatar } = req.body;
  console.log('Received parameters:', username, avatar);

  const updateQuery = 'UPDATE users SET avatar = ? WHERE UserName = ?';
  const updateValues = [avatar, username];

  connection.query(updateQuery, updateValues, (err, result) => {
    if (err) {
      console.error('Error updating user avatar:', err);
      res.status(500).json({ error: 'Failed to update user avatar' });
    } else {
      res.json({ success: true });
    }
  });
});

/**
 * Endpoint for retrieving a user's avatar.
 * Expects a username as a query parameter.
 */
app.get('/auth', (req, res) => {
  const username = req.query.username;

  const query = 'SELECT avatar FROM users WHERE UserName = ?';
  const values = [username];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error retrieving avatar:', error);
      return res.status(500).json({ error: 'Failed to retrieve avatar' });
    }

    if (results.length === 0 || !results[0].avatar) {
      const defaultAvatar = null; // Replace this with your default avatar URL or null
      return res.json({ avatar: defaultAvatar });
    }

    const avatar = results[0].avatar;
    return res.json({ avatar });
  });
});

/**
 * Endpoint for retrieving all movies.
 * Returns an array of movie records.
 */
app.get('/movies', (req, res) => {
  const query = 'SELECT * FROM cards WHERE category = "movie" ORDER BY year DESC';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving movies:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
});

/**
 * Endpoint for retrieving all TV show cards.
 * Returns an array of TV show records.
 */
app.get('/tv-shows', (req, res) => {
  const query = 'SELECT * FROM cards WHERE category = "tv show" ORDER BY year DESC';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving TV shows:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
});

/**
 * Endpoint for searching movies and TV shows.
 * Expects a search query as a URL parameter.
 * Returns an array of matching movie and TV show records.
 */
app.get('/search', (req, res) => {
  const query = req.query.q; // Get the search query from the request URL parameter
  if (!query) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  // Format the query for a case-insensitive search
  const formattedQuery = query.replace(/\s+/g, '').replace(/\-/g, '').replace(/\./g, '');
  const searchQuery = '%' + formattedQuery + '%'; // Create a wildcard search query

  const sql = 'SELECT * FROM cards WHERE (category = "movie" OR category = "tv show") AND (name LIKE ? OR REPLACE(REPLACE(REPLACE(name, " ", ""), "-", ""), ".", "") LIKE ?) ORDER BY year DESC';

  connection.query(sql, [searchQuery, searchQuery], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
