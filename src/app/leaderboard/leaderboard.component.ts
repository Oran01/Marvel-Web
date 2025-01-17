import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'server/leaderboard.service';

@Component({
  selector: 'app-leaderboard', // Selector used to include this component in templates
  templateUrl: './leaderboard.component.html', // Path to the component's HTML template
  styleUrls: ['./leaderboard.component.css'] // Path to the component's CSS styles
})
export class LeaderboardComponent implements OnInit {
  leaderboardData: any[] = []; // Array to store leaderboard data

  constructor(private leaderboardService: LeaderboardService) {}

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties.
   * This method is used to fetch the leaderboard data when the component is initialized.
   */
  ngOnInit() {
    this.fetchLeaderboardData(); // Fetch the leaderboard data on component initialization
    console.log(typeof this.leaderboardData); // Log the type of leaderboardData (for debugging purposes)
  }

  /**
   * Fetches the leaderboard data from the server using the LeaderboardService.
   * The data is then assigned to the leaderboardData array.
   */
  fetchLeaderboardData() {
    this.leaderboardService.fetchLeaderboardData().subscribe(
      data => {
        this.leaderboardData = data; // Assign the fetched data to leaderboardData
      },
      error => {
        console.error('Error retrieving leaderboard data:', error); // Log any errors
      }
    );
  }
}
