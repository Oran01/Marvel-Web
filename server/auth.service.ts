import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'user'; // Key used for storing user data in localStorage

  isLoggedIn: boolean = false; // Tracks the user's login status
  userName: string = ''; // Stores the user's username
  selectedAvatar: string = ''; // Stores the selected avatar URL

  /**
   * Constructor for the AuthService.
   * Initializes the login status, username, and selected avatar from localStorage if available.
   * @param http - HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) {
    // Retrieve user data from localStorage and initialize properties
    const user = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    this.isLoggedIn = user.isLoggedIn || false;
    this.userName = user.userName || '';
    this.selectedAvatar = user.selectedAvatar || '';
  }

  /**
   * Logs in the user by setting login status, storing username, and saving data to localStorage.
   * @param username - The username of the user logging in.
   */
  login(username: string) {
    this.isLoggedIn = true;
    this.userName = username;
    // Save login status, username, and selected avatar to localStorage
    localStorage.setItem(this.storageKey, JSON.stringify({ isLoggedIn: true, userName: username, selectedAvatar: this.selectedAvatar }));
  }

  /**
   * Logs out the user by clearing login status, username, and selected avatar.
   * Removes user data from localStorage.
   */
  logout() {
    this.isLoggedIn = false;
    this.userName = '';
    this.selectedAvatar = '';
    // Remove user data from localStorage
    localStorage.removeItem(this.storageKey);
  }

  /**
   * Returns the user's ID (username).
   * @returns The username of the logged-in user.
   */
  getUserId(): string {
    return this.userName;
  }

  /**
   * Retrieves the user's avatar from the database.
   * Sends an HTTP GET request to the server and updates the selectedAvatar property with the response.
   */
  retrieveAvatarFromDatabase() {
    const serverUrl = `http://localhost:3000/auth?username=` + this.userName;
    this.http.get(serverUrl).subscribe(
      (response: any) => {
        // Assuming the response contains the avatar URL
        this.selectedAvatar = response.avatar;
      },
      (error: any) => {
        console.error('Error retrieving avatar:', error);
      }
    );
  }
}
