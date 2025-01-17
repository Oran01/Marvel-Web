// Import necessary testing utilities from Angular testing module
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component to be tested
import { SingupPageComponent } from './singup-page.component';

// Describe block for grouping related tests for the SingupPageComponent
describe('SingupPageComponent', () => {
  // Declare variables for the component and fixture
  let component: SingupPageComponent;
  let fixture: ComponentFixture<SingupPageComponent>;

  // Set up the testing environment before each test
  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({
      // Declare the component to be tested
      declarations: [SingupPageComponent]
    });

    // Create a fixture for the component
    fixture = TestBed.createComponent(SingupPageComponent);

    // Get an instance of the component from the fixture
    component = fixture.componentInstance;

    // Trigger change detection to update the component
    fixture.detectChanges();
  });

  // Test to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy (i.e., it has been created)
    expect(component).toBeTruthy();
  });
});
