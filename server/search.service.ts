import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:3000/search'; // URL to the search API endpoint

  /**
   * Constructor for the SearchService.
   * @param http - HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Searches for data based on the provided query.
   * Sends an HTTP GET request with the search query as a parameter and returns an observable of the response.
   * @param query - The search query string.
   * @returns An Observable containing an array of search results.
   */
  search(query: string): Observable<any[]> {
    // Set the query parameter for the search request
    const params = new HttpParams().set('q', query);
    // Construct the full URL with query parameters
    const url = `${this.apiUrl}?${params.toString()}`;
    // Send the GET request and return the observable
    return this.http.get<any[]>(url);
  }
}
