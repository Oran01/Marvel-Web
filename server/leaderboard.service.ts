import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private apiUrl = 'http://localhost:3000/leaderboard'; // URL to the leaderboard API endpoint

  /**
   * Constructor for the LeaderboardService.
   * @param http - HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches the leaderboard data from the server.
   * Sends an HTTP GET request to the specified API endpoint and returns an observable of the response.
   * @returns An Observable containing an array of leaderboard data.
   */
  fetchLeaderboardData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
