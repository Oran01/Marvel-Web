import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderboardComponent } from './leaderboard.component';

/**
 * Unit tests for the LeaderboardComponent.
 * This file contains tests to verify the correct creation and basic functionality of the LeaderboardComponent.
 */
describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;

  // Setup the testing environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardComponent]
    });
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
