import { TestBed } from '@angular/core/testing';
import { TvShowService } from './tv-show.service';

/**
 * Unit tests for the TvShowService.
 * This file contains tests to verify the correct creation and basic functionality of the TvShowService.
 */
describe('TvShowService', () => {
  let service: TvShowService;

  // Setup the testing environment before each test
  beforeEach(() => {
    // Configure the testing module with necessary dependencies
    TestBed.configureTestingModule({});
    // Inject the TvShowService into the testing environment
    service = TestBed.inject(TvShowService);
  });

  // Test case to check if the service is created successfully
  it('should be created', () => {
    // Assert that the service instance is truthy (i.e., it exists)
    expect(service).toBeTruthy();
  });
});
