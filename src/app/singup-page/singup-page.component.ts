// Import necessary modules and services from Angular core and common packages
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Define the component metadata
@Component({
  selector: 'app-singup-page', // CSS selector for the component
  templateUrl: './singup-page.component.html', // Path to the HTML template for the component
  styleUrls: ['./singup-page.component.css'] // Path to the CSS file for styling the component
})
export class SingupPageComponent {
  // Component properties for storing form data and validation status
  fullName!: string; // User's full name
  userName!: string; // User's chosen username
  email!: string; // User's email address
  password!: string; // User's chosen password
  isFormValid: boolean = true; // Flag to indicate if the form is valid
  isEmailValid: boolean = true; // Flag to indicate if the email address is valid
  signupStatus: string = ''; // Message to display the status of the signup process

  // Constructor to inject HttpClient and Router services
  constructor(private http: HttpClient, private router: Router) { }

  // Method to handle user signup
  signup() {
    // Reset validation flags
    this.isFormValid = true;
    this.isEmailValid = true;

    // Validate that all required fields are filled
    if (!this.fullName || !this.userName || !this.email || !this.password) {
      this.isFormValid = false; // Set form as invalid if any field is empty
      return;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.isEmailValid = false; // Set email as invalid if it doesn't match the regex
      return;
    }

    // URL of the backend server for handling signup requests
    const url = 'http://localhost:3000/signup';

    // Data to be sent in the signup request
    const singupData = {
      userName: this.userName,
      password: this.password,
      fullName: this.fullName,
      email: this.email 
    };

    // Send HTTP POST request to the backend server
    this.http.post(url, singupData).subscribe(
      (response: any) => {
        // Handle successful signup response
        console.log(response.message); // Log the success message
        this.router.navigate(['/login']); // Navigate to the login page
      },
      (error: any) => {
        // Handle error response from the server
        console.error(error); // Log the error
        if (error.error && error.error.error === 'Username already exists') {
          this.signupStatus = 'Username already exists'; // Display message if the username is already taken
        } else {
          this.signupStatus = 'An error occurred during signup'; // Display generic error message
        }
      }
    );
  }
}
