import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThorPageComponent } from './thor-page.component';

// Test suite for ThorPageComponent
describe('ThorPageComponent', () => {
  // Declare variables for component and fixture
  let component: ThorPageComponent;
  let fixture: ComponentFixture<ThorPageComponent>;

  // Setup function to initialize the testing environment before each test
  beforeEach(() => {
    // Configure the testing module with the ThorPageComponent
    TestBed.configureTestingModule({
      declarations: [ThorPageComponent] // Declare the component to be tested
    });

    // Create a fixture for the ThorPageComponent
    fixture = TestBed.createComponent(ThorPageComponent);
    // Get an instance of the component from the fixture
    component = fixture.componentInstance;
    // Trigger change detection to ensure the component is properly initialized
    fixture.detectChanges();
  });

  // Test to ensure the component is created successfully
  it('should create', () => {
    // Check that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
