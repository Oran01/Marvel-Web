import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'server/auth.service';

/**
 * Component for the login page.
 * 
 * The LoginPageComponent is responsible for rendering the login form,
 * handling user input, and interacting with the backend for authentication.
 * It also manages form validation and login status messages.
 */
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  userName!: string; // Stores the user's input for username
  password!: string; // Stores the user's input for password
  isFormValid: boolean = true; // Indicates whether the form is valid or not
  loginStatus: string = ''; // Stores login status messages to display to the user

  /**
   * Constructs the LoginPageComponent.
   * 
   * @param http - Angular HttpClient service to make HTTP requests
   * @param router - Angular Router service to navigate between routes
   * @param authService - Custom authentication service for login management
   */
  constructor(
    private http: HttpClient,
    private router: Router,
    public authService: AuthService
  ) {}

  /**
   * Handles user login by validating the form and making an HTTP request.
   * 
   * This method performs the following actions:
   * 1. Checks if the username and password fields are filled.
   * 2. Sends a POST request to the login endpoint with the user's credentials.
   * 3. On successful login, stores user information and redirects to the home page.
   * 4. On failure, displays an error message to the user.
   */
  login() {
    // Reset form validation and login status
    this.isFormValid = true; 
    this.loginStatus = ''; 

    // Validate form fields
    if (!this.userName || !this.password) {
      this.isFormValid = false;
      return;
    }

    const url = 'http://localhost:3000/login'; // Login API endpoint
    const loginData = {
      userName: this.userName,
      password: this.password
    };

    // Make POST request to login endpoint
    this.http.post(url, loginData).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Handle successful response
        this.authService.login(this.userName); // Save login state
        this.authService.retrieveAvatarFromDatabase(); // Fetch user avatar
        this.router.navigateByUrl('/'); // Redirect to home page
      },
      (error: any) => {
        // Handle error response
        console.error(error);
        console.log(error.error); // Log server error response
        if (error.status) {
          this.loginStatus = 'Invalid username or password'; // Display error message
        }
      }
    );
  }
}
