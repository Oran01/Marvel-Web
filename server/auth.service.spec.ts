import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

/**
 * Unit tests for the AuthService.
 * This file contains tests to verify the correct creation and behavior of the AuthService.
 */
describe('AuthService', () => {
  let service: AuthService;

  // Setup the testing environment before each test
  beforeEach(() => {
    // Configure the testing module with necessary dependencies
    TestBed.configureTestingModule({});
    // Inject the AuthService into the testing environment
    service = TestBed.inject(AuthService);
  });

  // Test case to check if the service is created successfully
  it('should be created', () => {
    // Assert that the service instance is truthy (i.e., it exists)
    expect(service).toBeTruthy();
  });
});
