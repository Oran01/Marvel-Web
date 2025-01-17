import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';

/**
 * Unit tests for the SearchService.
 * This file contains tests to verify the correct creation and basic functionality of the SearchService.
 */
describe('SearchService', () => {
  let service: SearchService;

  // Setup the testing environment before each test
  beforeEach(() => {
    // Configure the testing module with necessary dependencies
    TestBed.configureTestingModule({});
    // Inject the SearchService into the testing environment
    service = TestBed.inject(SearchService);
  });

  // Test case to check if the service is created successfully
  it('should be created', () => {
    // Assert that the service instance is truthy (i.e., it exists)
    expect(service).toBeTruthy();
  });
});
