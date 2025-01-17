import { Component } from '@angular/core';

/**
 * AppComponent serves as the root component of the Angular application.
 * It acts as a container for other components and defines the structure
 * and behavior of the application.
 */
@Component({
  selector: 'app-root', // The custom HTML tag used to represent this component
  templateUrl: './app.component.html', // Path to the component's HTML template
  styleUrls: ['./app.component.css'] // Path to the component's CSS styles
})
export class AppComponent {
  // The title property used for binding in the component's template
  title = 'Marvel-Web';
}
