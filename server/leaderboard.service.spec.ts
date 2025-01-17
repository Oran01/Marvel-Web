import { TestBed } from '@angular/core/testing';
import { LeaderboardService } from './leaderboard.service';

/**
 * Unit tests for the LeaderboardService.
 * This file contains tests to verify the correct creation and basic functionality of the LeaderboardService.
 */
describe('LeaderboardService', () => {
  let service: LeaderboardService;

  // Setup the testing environment before each test
  beforeEach(() => {
    // Configure the testing module with necessary dependencies
    TestBed.configureTestingModule({});
    // Inject the LeaderboardService into the testing environment
    service = TestBed.inject(LeaderboardService);
  });

  // Test case to check if the service is created successfully
  it('should be created', () => {
    // Assert that the service instance is truthy (i.e., it exists)
    expect(service).toBeTruthy();
  });
});
