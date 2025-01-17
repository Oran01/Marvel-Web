import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShehulkPageComponent } from './shehulk-page.component';

// Describe block for the test suite of ShehulkPageComponent
describe('ShehulkPageComponent', () => {
  // Variables to hold the component instance and its fixture
  let component: ShehulkPageComponent;
  let fixture: ComponentFixture<ShehulkPageComponent>;

  // Setup function to configure the testing module and initialize the component before each test
  beforeEach(() => {
    // Configure the testing module with the component declaration
    TestBed.configureTestingModule({
      declarations: [ShehulkPageComponent]
    }).compileComponents(); // Compile components to ensure they are ready for testing

    // Create the component fixture and instance
    fixture = TestBed.createComponent(ShehulkPageComponent);
    component = fixture.componentInstance;

    // Trigger change detection to update the component's template and bindings
    fixture.detectChanges();
  });

  // Test case to verify that the component is created successfully
  it('should create', () => {
    // Expect the component instance to be truthy, indicating successful creation
    expect(component).toBeTruthy();
  });
});
