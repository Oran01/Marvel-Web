import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'server/auth.service';

@Component({
  selector: 'app-avatar-page', // Selector used to include this component in templates
  templateUrl: './avatar-page.component.html', // Path to the component's HTML template
  styleUrls: ['./avatar-page.component.css'] // Path to the component's CSS styles
})
export class AvatarPageComponent {

  avatarOptions: string[] = [
    '../../assets/Avatars/spiderman-avatar.jpg',
    '../../assets/Avatars/blackwidow-avatar.jpg',
    '../../assets/Avatars/captainamerica-avatar.jpg',
    '../../assets/Avatars/ironman-avatar.jpg',
    '../../assets/Avatars/starlord-avatar.jpg',
    '../../assets/Avatars/thor-avatar.jpg',
    '../../assets/Avatars/thanos-avatar.jpg',
    '../../assets/Avatars/doctorstrange-avatar.jpg',
    '../../assets/Avatars/groot-avatar.jpg',
    '../../assets/Avatars/mightythor-avatar.jpg',
    '../../assets/Avatars/blackpanther-avatar.jpg',
    '../../assets/Avatars/blackpanther1-avatar.jpg'
  ]; // List of avatar image paths

  selectedAvatar: string = ''; // Stores the currently selected avatar

  /**
   * Constructor for the AvatarPageComponent.
   * @param http - HttpClient for making HTTP requests.
   * @param router - Router for navigation.
   * @param authService - AuthService for user authentication.
   */
  constructor(private http: HttpClient, private router: Router, public authService: AuthService) { }

  /**
   * Handles the selection of an avatar.
   * Sets the selected avatar and updates it in the database.
   * @param avatar - The selected avatar URL.
   */
  handleAvatarSelection(avatar: string): void {
    this.selectedAvatar = avatar;
    this.updateAvatarInDatabase(avatar);
  }

  /**
   * Updates the selected avatar in the database.
   * Sends an HTTP POST request with the username and selected avatar to update the user's avatar.
   * @param avatar - The selected avatar URL.
   */
  updateAvatarInDatabase(avatar: string): void {
    const username = this.authService.getUserId(); // Get the current user's username
    const url = 'http://localhost:3000/avatar'; // Endpoint for updating the avatar

    const avatarData = {
      username: username,
      avatar: avatar
    };

    console.log('Received parameters:', username, avatar);

    this.http.post(url, avatarData).subscribe(
      (response: any) => {
        console.log('Avatar update successful:', response);
        // Navigate to the homepage and refresh the page
        this.router.navigateByUrl('/').then(() => {
          location.reload();
        });
      },
      (error: any) => {
        console.error('Error updating avatar:', error);
        // Handle error case appropriately
      }
    );
  }
}
