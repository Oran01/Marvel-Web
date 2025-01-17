import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarPageComponent } from './avatar-page.component';

/**
 * Unit tests for the AvatarPageComponent.
 * This file contains tests to verify the correct creation and basic functionality of the AvatarPageComponent.
 */
describe('AvatarPageComponent', () => {
  let component: AvatarPageComponent;
  let fixture: ComponentFixture<AvatarPageComponent>;

  // Setup the testing environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarPageComponent]
    });
    fixture = TestBed.createComponent(AvatarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
