import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies'; // URL to the movies API endpoint

  /**
   * Constructor for the MovieService.
   * @param http - HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Fetches the list of movies from the server.
   * Sends an HTTP GET request to the specified API endpoint and returns an observable of the response.
   * @returns An Observable containing an array of movie data.
   */
  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
