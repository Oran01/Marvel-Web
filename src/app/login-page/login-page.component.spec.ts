import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';

/**
 * Unit tests for the LoginPageComponent.
 * 
 * The LoginPageComponent is responsible for rendering the login page,
 * including input fields for username and password, error messages, 
 * and a login button. The component interacts with Angular forms and
 * handles user login functionality.
 */
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  /**
   * Configure the testing module and create an instance of LoginPageComponent.
   * This setup is run before each test in this suite.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent]
    }).compileComponents(); // Ensure that the component's HTML and CSS are compiled

    // Create a fixture for the LoginPageComponent and retrieve the component instance
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection to initialize the component
  });

  /**
   * Test to check if the LoginPageComponent is created successfully.
   * 
   * This test verifies that the component instance is properly initialized
   * and the component is correctly created without errors.
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component instance is truthy
  });
});
