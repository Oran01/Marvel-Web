import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedStylesComponent } from './shared-styles.component';

/**
 * Test suite for SharedStylesComponent.
 * This suite contains tests to ensure that the SharedStylesComponent 
 * is properly created and functions as expected.
 */
describe('SharedStylesComponent', () => {
  let component: SharedStylesComponent;
  let fixture: ComponentFixture<SharedStylesComponent>;

  /**
   * beforeEach block to set up the testing environment.
   * This block runs before each test case in this suite.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      // Declare the component that is being tested
      declarations: [SharedStylesComponent]
    });

    // Create a fixture for the component, which includes the component instance and the associated DOM
    fixture = TestBed.createComponent(SharedStylesComponent);

    // Get an instance of the component from the fixture
    component = fixture.componentInstance;

    // Trigger a change detection cycle for the component to ensure it is properly initialized
    fixture.detectChanges();
  });

  /**
   * Test case: should create the SharedStylesComponent
   * This test ensures that the component is successfully created.
   */
  it('should create', () => {
    // Assert that the component instance is defined and truthy
    expect(component).toBeTruthy();
  });
});
