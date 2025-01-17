import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecretinvasionPageComponent } from './secretinvasion-page.component';

/**
 * Unit tests for the SecretinvasionPageComponent.
 *
 * This test suite sets up the necessary environment for testing the SecretinvasionPageComponent
 * by configuring the testing module, creating a component instance, and running basic tests
 * to ensure the component is created successfully.
 */
describe('SecretinvasionPageComponent', () => {
  let component: SecretinvasionPageComponent; // The component instance to be tested
  let fixture: ComponentFixture<SecretinvasionPageComponent>; // The fixture for creating and interacting with the component

  /**
   * Sets up the testing environment before each test is executed.
   * Configures the TestBed with the component declaration and creates an instance of the component.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretinvasionPageComponent] // Declare the component to be tested
    }).compileComponents(); // Compile the components and templates

    fixture = TestBed.createComponent(SecretinvasionPageComponent); // Create the component fixture
    component = fixture.componentInstance; // Get the instance of the component
    fixture.detectChanges(); // Trigger change detection to update the component
  });

  /**
   * Test to verify that the component is created successfully.
   * This test checks if the component instance is truthy, indicating that it was created correctly.
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component instance is created
  });
});
