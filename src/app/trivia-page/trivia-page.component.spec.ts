import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TriviaPageComponent } from './trivia-page.component';

/**
 * This is a test suite for the TriviaPageComponent. It contains tests to ensure
 * that the component behaves as expected.
 */
describe('TriviaPageComponent', () => {
  let component: TriviaPageComponent; // The component instance being tested
  let fixture: ComponentFixture<TriviaPageComponent>; // The test fixture for the component

  /**
   * Runs before each test in this suite. Sets up the testing environment by
   * configuring the TestBed, initializing the component and fixture.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriviaPageComponent] // Declare the component under test
    });

    // Create the component and fixture
    fixture = TestBed.createComponent(TriviaPageComponent);
    component = fixture.componentInstance;

    // Trigger change detection to ensure component's bindings are updated
    fixture.detectChanges();
  });

  /**
   * Test case to verify that the component is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component instance is truthy (i.e., it exists)
  });
});
