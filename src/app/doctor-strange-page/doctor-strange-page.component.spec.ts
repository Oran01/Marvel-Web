import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorStrangePageComponent } from './doctor-strange-page.component';

/**
 * Unit tests for the DoctorStrangePageComponent.
 * This file contains tests to verify the correct creation and basic functionality of the DoctorStrangePageComponent.
 */
describe('DoctorStrangePageComponent', () => {
  let component: DoctorStrangePageComponent;
  let fixture: ComponentFixture<DoctorStrangePageComponent>;

  // Setup the testing environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorStrangePageComponent]
    });
    fixture = TestBed.createComponent(DoctorStrangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
