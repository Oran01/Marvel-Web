import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private apiUrl = 'http://localhost:3000/trivia'; // URL to the trivia API endpoint

  /**
   * Constructor for the TriviaService.
   * @param http - HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches the score for a user by their userId (username).
   * Sends an HTTP GET request to retrieve the user's score from the server.
   * @param userId - The ID (username) of the user whose score is being fetched.
   * @returns An Observable containing the user's score, or -1 if the score is not found.
   */
  getScoreForUser(userId: string): Observable<number> {
    const url = `${this.apiUrl}?username=${userId}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        if (response.error && response.error === 'User score not found') {
          return -1; // Return -1 for the score when not found
        } else {
          return response.score;
        }
      }),
      catchError(error => {
        if (error.status === 404 && error.error && error.error.error === 'User score not found') {
          return of(-1); // Return -1 for the score when not found
        } else {
          throw error;
        }
      })
    );
  }

  /**
   * Updates the score for a user.
   * Sends an HTTP POST request with the user's username and new score to update the user's score.
   * @param username - The username of the user whose score is being updated.
   * @param score - The new score to be set for the user.
   * @returns An Observable containing the server's response.
   */
  updateScore(username: string, score: number): Observable<any> {
    const url = `${this.apiUrl}`;
    const payload = { username, score };
    console.log('Update Payload:', payload); // Log the payload for debugging
    return this.http.post<any>(url, payload);
  }

  /**
   * Adds a new score for a user.
   * Sends an HTTP POST request with the user's username and score to add a new entry to the leaderboard.
   * @param username - The username of the user whose score is being added.
   * @param score - The score to be added for the user.
   * @returns An Observable containing the server's response.
   */
  addScore(username: string, score: number): Observable<any> {
    const url = `${this.apiUrl}`;
    const payload = { username, score };
    return this.http.post<any>(url, payload);
  }
}
