# MarvalWeb

Marvel-Web is an Angular-based web application showcasing Marvel movies, TV shows, trivia, and a leaderboard. 
It provides an engaging platform for Marvel fans to explore their favorite Marvel universe content.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Database Setup

Import the marvel-web.sql file into your MySQL database:
mysql -u your-username -p your-database-name < marvel-web.sql

## Development server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build

Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

## Running unit tests

Run ng test to execute the unit tests via [Karma](https://karma-runner.github.io).

## Features Breakdown

Movies and TV Shows Section: Browse through Marvel movies and TV shows with a dynamic slider and star rating system.
Trivia Quiz: Test your Marvel knowledge with a fun quiz game.
Leaderboard: Compete with other users by adding or updating your scores

## File Structure
src/: Frontend Angular source files.
server/: Backend files for managing APIs and database interactions.
marvel-web.sql: SQL file for initializing the database schema and data.

## Running end-to-end tests

Run ng e2e to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use ng help or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notes
Ensure your MySQL server is running and accessible at the host and port specified in your `server.js`.

