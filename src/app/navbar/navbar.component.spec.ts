import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  // Setting up the testing environment for the NavbarComponent
  beforeEach(() => {
    // Configuring the TestBed module with the NavbarComponent
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]  // Declaring the component to be tested
    });
    // Creating an instance of the NavbarComponent for testing
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    // Triggering change detection to ensure the component is initialized
    fixture.detectChanges();
  });

  // Test case to verify that the NavbarComponent is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();  // Asserting that the component is truthy (i.e., created successfully)
  });
});
