-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: marvel-web
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(25) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `age` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `geners` varchar(45) DEFAULT NULL,
  `year` varchar(25) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `stars` decimal(2,1) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `episodes` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,'movie','Spider-Man: No Way Home','ALL','2h 28min ','Action,Adventure,Fantasy','2021','Peter Parker\'s secret identity is revealed to the entire world. Desperate for help,Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world. ',4.0,'../../assets/MovieImg/MovieCovers/spider-man-no-way-home.jpg',NULL),(2,'movie','Black Widow','12','2h 14min','Action,Adventure,Sci-Fi','2021','In Marvel Studios\' action-packed spy thriller \"Black Widow,\" Natasha Romanoff aka Black Widow  confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger ',3.5,'../../assets/MovieImg/MovieCovers/black-widow.jpg',NULL),(3,'movie','Guardians of the Galaxy Vol. 2','10','2h 16min','Action,Adventure,Comedy','2017','After saving Xandar from Ronan\'s wrath, the Guardians are now recognized as heroes. Now the team must help their leader, Star Lord, uncover the truth behind his true heritage. Along the way, old foes turn to allies and betrayal is blooming. And the Guardians find they are up against a devastating new menace who is out to rule the galaxy.',4.0,'../../assets/MovieImg/GaurdiansImg/guardians-of-the-galaxy-vol-2.jpg',NULL),(4,'movie','Doctor Strange','10','1h 55min','Action,Adventure,Fanrasy','2016','Marvel\'s \"Doctor Strange\" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City\'s Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.',4.0,'../../assets/MovieImg/DrStrangeImg/doctor-strange-movie-cover.jpg',NULL),(5,'movie','Captain America: Civil War','12','2h 17min','Action,Sci-Fi','2016','Political involvement in the Avengers\' affairs causes a rift between Captain America and Iron Man. A possible cure for superheroes deeply divides courageous Captain America and arrogant Tony Stark. Factions of superheroes divide themselves in to Team Captain America and Team Stark.',4.0,'../../assets/MovieImg/MovieCovers/captain-america-civil-war.jpeg',NULL),(6,'movie','Antman','ALL','2h 13min','Action,Comedy,Sci-Fi','2015','Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.',3.5,'../../assets/MovieImg/AntManImg/ant-man-movie-cover.jpg',NULL),(7,'movie','Avengers: Age of Ultron','ALL','2h 21min','Action,Adventure,Sci-Fi','2015','Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together.Earth\'s mightiest heroes must come together once again to protect the world from global extinction. ',3.5,'../../assets/MovieImg/MovieCovers/avengers-age-of-ultron.jpg',NULL),(8,'movie','Guardians of the Galaxy','12','2h 1min','Action,Adventure,Comedy','2014','After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and  his team and save the galaxy from his power, Quill creates a team of space heroes known as the \"Guardians of the Galaxy\" to save the galaxy.',4.0,'../../assets/MovieImg/GaurdiansImg/guardians-of-the-galaxy.jpg',NULL),(9,'movie','Spider-Man: Far from Home','ALL','2h 9min ','Action,Adventure,Comedy','2021','Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter\'s plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks,creating havoc across the continent. ',3.5,'../../assets/MovieImg/MovieCovers/spider-man-far-from-home.jpg',NULL),(10,'movie','Avenger Endgame','ALL','3h 1min','Action,Adventure,Drama','2019','After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to  the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face.',4.0,'../../assets/MovieImg/MovieCovers/avengers-endgame.jpg',NULL),(11,'movie','Captain Marvel','ALL','2h 3min','Action,Adventure,Sci-Fi','2019','After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls, Danvers begins to discover there\'s more to her past. With help from S.H.I.E.L.D. agent Nick Fury, they set out to unravel the truth.',3.5,'../../assets/MovieImg/MovieCovers/captain-marvel.jpg',NULL),(12,'movie','Ant Man And The Wasp','10','1h 58min','Action,Adventure,Comedy','2018','In the aftermath of The First Avenger: Milkhemet ha\'ezrakhim (2016), Scott Lang grapples with the consequences of his choices as both a superhero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he\'s confronted by Hope van Dyne and Dr. Hank Pym with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.',3.5,'../../assets/MovieImg/AntManImg/ant-man-and-the-wasp.jpeg',NULL),(13,'movie','Avengers: Infinity War','10','2h 29min','Action,Adventure,Sci-Fi','2018','As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain. ',4.0,'../../assets/MovieImg/MovieCovers/avengers-infinity-war.jpeg',NULL),(14,'movie','Black Panther','ALL','2h 14min','Action,Adventure,Sci-Fi','2018','Imprisoned on the other side of the universe, the mighty Thor (Chris Hemsworth) finds himself in a deadly gladiatorial contest that puts him against The Incredible Hulk (Mark Ruffalo), his former ally and fellow Avenger. Thor\'s quest for survival leads him in a race against time to prevent the all-powerful Hela (Cate Blanchett) from destroying his home world and the Asgardian civilization. ',3.5,'../../assets/MovieImg/PantherImg/black-panther.jpeg',NULL),(15,'movie','Thor Ragnarok','10','2h 10min','Action,Adventure,Comedy','2017','Thor\'s world is about to explode in Marvel\'s Thor: Ragnarok. His devious brother, Loki, has taken over Asgard, the powerful Hela has emerged to steal the throne for herself and Thor is imprisoned on the other side of the universe. To escape captivity and save his home from imminent destruction, Thor must first win a deadly alien contest by defeating his former ally and fellow Avenger.',4.0,'../../assets/MovieImg/ThorImg/thor-ragnarok.jpg',NULL),(16,'movie','Spider-Man: Homecoming','ALL','2h 13min','Action,Adventure,Sci-Fi','2017','Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.',3.5,'../../assets/MovieImg/MovieCovers/spider-man-homecoming.jpg',NULL),(17,'tv show','Hawkeye',NULL,'5h 50m','TV Mini Series','2021','Former Avenger Clint Barton has a seemingly simple mission: get back to his family for Christmas. Possible? Maybe with the help of Kate Bishop, a 22-year-old archer with dreams of becoming a Super Hero. The two are forced to work together when a presence from Barton\'s past threatens to derail far more than the festive spirit. ',4.0,'../../assets/TvShowsImg/hawkeye.png','6 Episodes'),(18,'tv show','wandaVision',NULL,'5h 50m','TV Mini Series','2021','Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.',4.0,'../../assets/TvShowsImg/wandaVision.jpg','9 Episodes'),(19,'tv show','Cloak & Dagger',NULL,'14h 30min','TV Series','2018-2019','Tandy Bowen and Tyrone Johnson, two teenagers from different backgrounds, acquire superpowers while forming a romantic relationship. They soon realize that their powers work better when they are together, but their feelings for each other make their already complicated world even more challenging.',3.5,'../../assets/TvShowsImg/marvel-s-cloak-and-dagger.jpg','20 Episodes'),(20,'tv show','Runaways',NULL,'33h','TV Series','2017-2019','Follows a group of six teenagers in the Marvel universe - Nico Minoru, Karolina Dean, Molly Hernandez, Chase Stein, Alex Wilder, and Gertrude Yorkes - who discover that their parents are secretly members of a super-villain cabal called The Pride. After deciding they\'re no longer safe in their own homes, the kids go on the run. In the midst of hiding from their elders, the teens learn about themselves and become a family of their own.',3.5,'../../assets/TvShowsImg/marvel-s-runaways.jpg','33 Episodes'),(21,'tv show','M.O.D.O.K.',NULL,'3h 30min','TV Series','2021','It centers around an egomaniacal supervillain with a really big head and a really little body, who struggles to maintain control of his evil organization and his demanding family.',3.0,'../../assets/TvShowsImg/marvel\'s-modok.jpg','10 Episodes'),(22,'tv show','Loki',NULL,' 4h 53m','TV Mini Series','2021','The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.',4.0,'../../assets/TvShowsImg/loki.jpg','6 Episodes'),(23,'tv show','Ms. Marvel',NULL,'4h 31m','TV Mini Series','2022','Kamala, a superhero fan with an imagination--particularly when it comes to Captain Marvel--feels like she doesn\'t fit in at school and sometimes even at home, that is until she gets superpowers like the heroes she admires.',3.0,'../../assets/TvShowsImg/msMarvel.png','6 Episodes'),(24,'tv show','Moon Knight',NULL,'4h 47m','TV Mini Series','2022','The series follows Steven Grant, a mild- mannered gift-shop employee, who becomes plagued with blackouts and memories of another life. Steven discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc\'s enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.',3.5,'../../assets/TvShowsImg/moonKnight.png','6 Episodes'),(25,'tv show','The Falcon and the Winter Soldier',NULL,'5h','TV Mini Series','2021','Following the events of \'Avengers: Endgame,\' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.',3.5,'../../assets/TvShowsImg/the-falcon-and-the-winter-soldier.jpg','6 Episodes'),(26,'tv show','Iron Fist',NULL,'21h 8m','TV Series','2017-2018','Danny Rand returns to New York City after being missing for years, trying to reconnect with his past and his family legacy. He fights against the criminal element corrupting his world around him with his incredible kung-fu mastery and ability to summon the awesome power of the fiery Iron Fist.',3.0,'../../assets/TvShowsImg/marvel-s-iron-fist.jpg','23 Episodes'),(27,'tv show','Inhumans',NULL,' 5h 40m','TV Series','2017','Plot. Fleeing persecution, a group of Inhumans founded a secret settlement on the Moon, which later became known as the city of Attilan. Attilan is ruled by the Inhuman Royal Family, at the top of which are King Black Bolt and Queen Medusa.',2.5,'../../assets/TvShowsImg/marvel-s-inhumans.jpg','8 Episodes'),(28,'tv show','Hit Monkey',NULL,'4h','TV Series','2021','It tells the tale of a wronged Japanese snow monkey, mentored by the ghost of an American assassin, as he cuts a wide swath through the Tokyo underworld.',4.0,'../../assets/TvShowsImg/marvels-hit-monkey.jpg','11 Episodes');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaderboard`
--

DROP TABLE IF EXISTS `leaderboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaderboard` (
  `username` varchar(50) NOT NULL,
  `score` int DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaderboard`
--

LOCK TABLES `leaderboard` WRITE;
/*!40000 ALTER TABLE `leaderboard` DISABLE KEYS */;
INSERT INTO `leaderboard` VALUES ('friendlySpiderman',10),('groot',10),('king589',7),('miniGroot',9),('noobmaster69',9),('sonOfOdin',7),('Star Loard',5),('thor',9);
/*!40000 ALTER TABLE `leaderboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `FullName` varchar(25) NOT NULL,
  `UserName` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Daniel Wilson','friendlySpiderman',' daniel.wilson@gmail.com',' DanielSpid25',NULL),('Olivia Martinez','groot',' oliviamartinez@gmail.com','Olivia@@56','../../assets/Avatars/groot-avatar.jpg'),('William Anderson','king589','williamanderson78@gmail.com','William9865$',NULL),('Emily Thompson','miniGroot','emily2thompson@gmail.com',' Emily8964!',NULL),('Benjamin Davis','noobmaster69','benjamin_davis@gmail.com','Benjamin69@!',NULL),('Samantha Johnson','sonOfOdin','samantha.johnson@gmail.com','Samantha@1256',NULL),('Justin Jon','Star Loard','Justin123@gmail.com','Justin2459','../../assets/Avatars/ironman-avatar.jpg'),('oran alster','thor','oran3087@gmail.com','oran25','../../assets/Avatars/thor-avatar.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-30 13:13:06
