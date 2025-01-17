import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuardiansPageComponent } from './guardians-page.component';

/**
 * Unit tests for the GuardiansPageComponent.
 * This file contains tests to verify the correct creation and basic functionality of the GuardiansPageComponent.
 */
describe('GuardiansPageComponent', () => {
  let component: GuardiansPageComponent;
  let fixture: ComponentFixture<GuardiansPageComponent>;

  // Setup the testing environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardiansPageComponent]
    });
    fixture = TestBed.createComponent(GuardiansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
