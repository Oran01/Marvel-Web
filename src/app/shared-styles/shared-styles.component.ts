import { Component } from '@angular/core';

/**
 * The SharedStylesComponent class is responsible for encapsulating 
 * the styles shared across multiple components in the application.
 * This component serves as a container for shared styles, allowing 
 * for consistent styling throughout the application.
 */
@Component({
  selector: 'app-shared-styles', // The selector used to include this component in the HTML
  templateUrl: './shared-styles.component.html', // The HTML template associated with this component
  styleUrls: ['./shared-styles.component.css'] // The CSS styles associated with this component
})
export class SharedStylesComponent {
  // This component currently does not contain any logic or properties.
  // It primarily serves as a container for shared styles.
}
