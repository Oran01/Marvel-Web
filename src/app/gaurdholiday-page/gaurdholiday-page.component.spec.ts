import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaurdholidayPageComponent } from './gaurdholiday-page.component';

/**
 * Unit tests for the GaurdholidayPageComponent.
 * This file contains tests to verify the correct creation and basic functionality of the GaurdholidayPageComponent.
 */
describe('GaurdholidayPageComponent', () => {
  let component: GaurdholidayPageComponent;
  let fixture: ComponentFixture<GaurdholidayPageComponent>;

  // Setup the testing environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaurdholidayPageComponent]
    });
    fixture = TestBed.createComponent(GaurdholidayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
