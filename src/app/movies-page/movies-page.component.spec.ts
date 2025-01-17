import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesPageComponent } from './movies-page.component';

describe('MoviesPageComponent', () => {
  let component: MoviesPageComponent;
  let fixture: ComponentFixture<MoviesPageComponent>;

  /**
   * Sets up the testing environment for MoviesPageComponent.
   * This runs before each test case.
   */
  beforeEach(() => {
    // Configures the testing module
    TestBed.configureTestingModule({
      // Declares the MoviesPageComponent for testing
      declarations: [MoviesPageComponent]
    });

    // Creates an instance of the component and its fixture
    fixture = TestBed.createComponent(MoviesPageComponent);
    component = fixture.componentInstance;

    // Triggers change detection to ensure the component is initialized
    fixture.detectChanges();
  });

  /**
   * Test case to verify that the MoviesPageComponent is created successfully.
   */
  it('should create', () => {
    // Asserts that the component instance is truthy (i.e., it was created successfully)
    expect(component).toBeTruthy();
  });
});
