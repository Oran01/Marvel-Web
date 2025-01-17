import { Component, OnInit } from '@angular/core';
import { MovieService } from 'server/movie.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  // Array to hold the list of movies
  movies: any[] = [];

  // Dependency injection of MovieService
  constructor(private movieService: MovieService) { }

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
  ngOnInit() {
    this.getMovies();
  }

  /**
   * Fetches the list of movies from the MovieService and assigns them to the movies array.
   */
  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  /**
   * Generates an array of star icons based on the given rating.
   * @param rating - The rating value (e.g., 3.5 for 3 full stars and a half star)
   * @returns An array of star class names for rendering the rating
   */
  getStarsArray(rating: number): string[] {
    const starsArray: string[] = [];
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Whether there is a half star

    // Add full star icons
    for (let i = 0; i < fullStars; i++) {
      starsArray.push('fa-solid fa-star rating');
    }

    // Add half star icon if needed
    if (hasHalfStar) {
      starsArray.push('fa-solid fa-star-half-alt rating');
    }

    // Add empty star icons to reach a total of 5 stars
    while (starsArray.length < 5) {
      starsArray.push('fa-regular fa-star');
    }

    return starsArray;
  }
}
