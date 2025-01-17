import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  private apiUrl = 'http://localhost:3000/tv-shows'; // URL to the TV shows API endpoint

  /**
   * Constructor for the TvShowService.
   * @param http - HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Fetches the list of TV shows from the server.
   * Sends an HTTP GET request to retrieve TV show data from the server.
   * @returns An Observable containing an array of TV show data.
   */
  getTvShow(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
