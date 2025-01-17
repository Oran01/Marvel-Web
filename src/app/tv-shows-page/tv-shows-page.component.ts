import { Component, OnInit } from '@angular/core';
import { TvShowService } from 'server/tv-show.service';

/**
 * TvShowsPageComponent
 * 
 * This component displays a list of TV shows and their details, including ratings.
 * It fetches data from the TvShowService and presents it in a user-friendly interface.
 */
@Component({
  selector: 'app-tv-shows-page', // The component's selector
  templateUrl: './tv-shows-page.component.html', // The template file for the component
  styleUrls: ['./tv-shows-page.component.css'] // The stylesheet file for the component
})
export class TvShowsPageComponent implements OnInit {
  tvShows: any[] = []; // Array to hold the list of TV shows

  /**
   * Constructor
   * 
   * @param tvShowService - The service used to fetch TV show data
   */
  constructor(private tvShowService: TvShowService) { }

  /**
   * ngOnInit
   * 
   * Lifecycle hook that is called after the component is initialized.
   * It calls the getTvShow method to load the TV shows data.
   */
  ngOnInit() {
    this.getTvShow();
  }

  /**
   * getTvShow
   * 
   * Fetches the list of TV shows from the TvShowService and assigns it to the tvShows array.
   */
  getTvShow(): void {
    this.tvShowService.getTvShow()
      .subscribe(tvShows => this.tvShows = tvShows);
  }

  /**
   * getStarsArray
   * 
   * Converts a numerical rating into an array of star icon class names.
   * This method helps to display the star rating visually using FontAwesome icons.
   * 
   * @param rating - The numerical rating of the TV show
   * @returns An array of string representing the CSS classes for star icons
   */
  getStarsArray(rating: number): string[] {
    const starsArray: string[] = [];
    const fullStars = Math.floor(rating); // Full stars count
    const hasHalfStar = rating % 1 !== 0; // Whether there's a half star
  
    // Add full star classes to the array
    for (let i = 0; i < fullStars; i++) {
      starsArray.push('fa-solid fa-star rating');
    }
  
    // Add half star class if applicable
    if (hasHalfStar) {
      starsArray.push('fa-solid fa-star-half-alt rating');
    }
  
    // Add empty star classes until there are 5 stars in total
    while (starsArray.length < 5) {
      starsArray.push('fa-regular fa-star');
    }
  
    return starsArray;
  }
}
