import { TestBed } from '@angular/core/testing';
import { TriviaService } from './trivia.service';

/**
 * Unit tests for the TriviaService.
 * This file contains tests to verify the correct creation and basic functionality of the TriviaService.
 */
describe('TriviaService', () => {
  let service: TriviaService;

  // Setup the testing environment before each test
  beforeEach(() => {
    // Configure the testing module with necessary dependencies
    TestBed.configureTestingModule({});
    // Inject the TriviaService into the testing environment
    service = TestBed.inject(TriviaService);
  });

  // Test case to check if the service is created successfully
  it('should be created', () => {
    // Assert that the service instance is truthy (i.e., it exists)
    expect(service).toBeTruthy();
  });
});
