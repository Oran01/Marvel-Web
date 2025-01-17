import { Component } from '@angular/core'; // Import Angular Component decorator
import { SearchService } from 'server/search.service'; // Import the service for handling search queries

@Component({
  selector: 'app-search-page', // The component's selector used in HTML
  templateUrl: './search-page.component.html', // Path to the HTML template
  styleUrls: ['./search-page.component.css'] // Path to the CSS styles
})
export class SearchPageComponent {
  isSearchOpen: boolean = false; // Boolean to track if the search bar is open
  searchQuery!: string; // The search query entered by the user, initialized as undefined
  searchResult: any[] = []; // Array to store search results
  isSearching: boolean = false; // Boolean to track if a search is in progress
  alert: boolean = false; // Boolean to display an alert if no search results are found

  /**
   * Handles the click event on the search button.
   * Opens the search bar if it is not already open.
   * If the search bar is open and the search query is not empty, performs a search.
   */
  handleSearchClick(): void {
    if (!this.isSearching) {
      this.isSearching = true;
      const inputElement = document.querySelector('.input-search') as HTMLInputElement;
      if (inputElement) {
        inputElement.focus(); // Focus on the search input field
      }
      document.addEventListener('click', this.closeSearchBarOutsideClick); // Add event listener to close search bar if clicked outside
    } else if (this.searchQuery.trim() !== '') {
      this.searchResults(); // Perform search if query is not empty
    }
  }
  
  /**
   * Closes the search bar and clears the search query.
   * Removes the event listener for clicks outside the search bar.
   */
  closeSearchBar(): void {
    this.isSearching = false;
    this.searchQuery = ''; 
    document.removeEventListener('click', this.closeSearchBarOutsideClick); // Remove event listener
  }
  
  /**
   * Handles clicks outside the search bar to close it.
   * @param event - The click event.
   */
  closeSearchBarOutsideClick = (event: Event): void => {
    const searchBoxElement = document.querySelector('.search-box');
    if (searchBoxElement && !searchBoxElement.contains(event.target as Node)) {
      this.closeSearchBar(); // Close search bar if click is outside of it
    }
  }
  
  /**
   * Constructor for the SearchPageComponent.
   * @param searchService - The service used for performing search queries.
   */
  constructor(private searchService: SearchService) {}
  
  /**
   * Performs a search using the search query.
   * Updates search results and handles no results alert.
   */
  searchResults() {
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      this.searchService.search(this.searchQuery).subscribe(
        (response) => {
          this.searchResult = response; // Update search results with the response
          if (this.searchResult.length == 0) {
            this.alert = !this.alert; // Show alert if no results are found
          } else {
            this.alert = false; // Hide alert if results are found
          }
        },
        (error) => {
          console.error(error); // Log any errors that occur during the search
        }
      );
    } else {
      this.searchResult = []; // Clear search results if query is empty
    }
  }

  /**
   * Generates an array of star classes based on the rating.
   * @param rating - The rating value.
   * @returns An array of star class names.
   */
  getStarsArray(rating: number): string[] {
    const starsArray: string[] = [];
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there is a half star
  
    // Add full stars to the array
    for (let i = 0; i < fullStars; i++) {
      starsArray.push('fa-solid fa-star rating');
    }
  
    // Add half star if needed
    if (hasHalfStar) {
      starsArray.push('fa-solid fa-star-half-alt rating');
    }
  
    // Add empty stars to complete the array to a total of 5 stars
    while (starsArray.length < 5) {
      starsArray.push('fa-regular fa-star');
    }
  
    return starsArray;
  }
}
