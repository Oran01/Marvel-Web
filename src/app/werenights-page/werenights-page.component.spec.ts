import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component to be tested
import { WerenightsPageComponent } from './werenights-page.component';

describe('WerenightsPageComponent', () => {
  // Declare variables for the component and fixture
  let component: WerenightsPageComponent;
  let fixture: ComponentFixture<WerenightsPageComponent>;

  // Setup the testing module and create the component instance
  beforeEach(() => {
    // Configure the testing module with the component declaration
    TestBed.configureTestingModule({
      declarations: [WerenightsPageComponent]
    })
    // Create the component fixture
    fixture = TestBed.createComponent(WerenightsPageComponent);
    // Get the component instance from the fixture
    component = fixture.componentInstance;
    // Trigger change detection to apply initial bindings
    fixture.detectChanges();
  });

  // Test to ensure the component is created successfully
  it('should create', () => {
    // Expect the component instance to be truthy (i.e., not null or undefined)
    expect(component).toBeTruthy();
  });
});
