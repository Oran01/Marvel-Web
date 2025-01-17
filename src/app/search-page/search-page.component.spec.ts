import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the SearchPageComponent that we are testing
import { SearchPageComponent } from './search-page.component';

// Define a test suite for the SearchPageComponent
describe('SearchPageComponent', () => {
  // Declare variables to hold the component and its fixture
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  // Run before each test in this suite
  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({
      declarations: [SearchPageComponent] // Declare the component to be tested
    });

    // Create the component fixture, which provides access to the component instance and its DOM elements
    fixture = TestBed.createComponent(SearchPageComponent);
    
    // Get the instance of the component
    component = fixture.componentInstance;

    // Trigger change detection to update the component with initial data
    fixture.detectChanges();
  });

  // Define a test case to check if the component is created successfully
  it('should create', () => {
    // Expect the component to be truthy, meaning it was created successfully
    expect(component).toBeTruthy();
  });
});
