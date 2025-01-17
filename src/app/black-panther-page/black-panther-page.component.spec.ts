import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlackPantherPageComponent } from './black-panther-page.component';

/**
 * Unit tests for the BlackPantherPageComponent.
 * This file contains tests to verify the correct creation and basic functionality of the BlackPantherPageComponent.
 */
describe('BlackPantherPageComponent', () => {
  let component: BlackPantherPageComponent;
  let fixture: ComponentFixture<BlackPantherPageComponent>;

  // Setup the testing environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackPantherPageComponent]
    });
    fixture = TestBed.createComponent(BlackPantherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
