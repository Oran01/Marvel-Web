import { TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';

/**
 * Unit tests for the MovieService.
 * This file contains tests to verify the correct creation and basic functionality of the MovieService.
 */
describe('MovieService', () => {
  let service: MovieService;

  // Setup the testing environment before each test
  beforeEach(() => {
    // Configure the testing module with necessary dependencies
    TestBed.configureTestingModule({});
    // Inject the MovieService into the testing environment
    service = TestBed.inject(MovieService);
  });

  // Test case to check if the service is created successfully
  it('should be created', () => {
    // Assert that the service instance is truthy (i.e., it exists)
    expect(service).toBeTruthy();
  });
});
