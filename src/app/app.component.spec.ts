import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

/**
 * Unit tests for the AppComponent
 */
describe('AppComponent', () => {
  /**
   * Setup for the test module
   * 
   * Configures the testing module with necessary imports and declarations.
   */
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule], // Import RouterTestingModule for routing-related functionalities
    declarations: [AppComponent] // Declare the component being tested
  }));

  /**
   * Test case: should create the app
   * 
   * Verifies if the AppComponent instance is created successfully.
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Create the component instance
    const app = fixture.componentInstance; // Get the instance of the component
    expect(app).toBeTruthy(); // Assert that the component instance is truthy (exists)
  });

  /**
   * Test case: should have as title 'Marvel-Web'
   * 
   * Checks if the `title` property of the AppComponent is correctly set to 'Marvel-Web'.
   */
  it(`should have as title 'Marvel-Web'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Create the component instance
    const app = fixture.componentInstance; // Get the instance of the component
    expect(app.title).toEqual('Marvel-Web'); // Assert that the title is 'Marvel-Web'
  });

  /**
   * Test case: should render title
   * 
   * Ensures that the component's template correctly renders the title.
   */
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Create the component instance
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement as HTMLElement; // Get the native element
    // Assert that the rendered content contains the expected text
    expect(compiled.querySelector('.content span')?.textContent).toContain('Marvel-Web app is running!');
  });
});
