import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IAmGrootPageComponent } from './i-am-groot-page.component';

/**
 * Unit tests for the IAmGrootPageComponent.
 * This file contains tests to verify the correct creation and basic functionality of the IAmGrootPageComponent.
 */
describe('IAmGrootPageComponent', () => {
  let component: IAmGrootPageComponent;
  let fixture: ComponentFixture<IAmGrootPageComponent>;

  // Setup the testing environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IAmGrootPageComponent]
    });
    fixture = TestBed.createComponent(IAmGrootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
