import { Component, OnInit } from '@angular/core';
import { AuthService } from 'server/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // Boolean flag to track whether the dropdown menu is open
  isDropdownOpen: boolean = false;

  // Boolean flag to track whether the side menu is open
  isMenuOpen = false;

  constructor(public authService: AuthService) { }

  // Method to toggle the visibility of the side menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Method to toggle the visibility of the dropdown menu
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Method to handle user logout
  logout() {
    // Call the logout method from the AuthService to log the user out
    this.authService.logout();
  }

  // Angular lifecycle hook that is called after component initialization
  ngOnInit(): void {
    // Check if the user is logged in and retrieve the avatar if necessary
    if (this.authService.isLoggedIn) {
      this.authService.retrieveAvatarFromDatabase();
    }
  }
}
