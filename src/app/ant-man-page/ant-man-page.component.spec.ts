import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntManPageComponent } from './ant-man-page.component';

/**
 * Unit tests for the AntManPageComponent.
 * This file contains tests to verify the correct creation and basic functionality of the AntManPageComponent.
 */
describe('AntManPageComponent', () => {
  let component: AntManPageComponent;
  let fixture: ComponentFixture<AntManPageComponent>;

  // Setup the testing environment before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntManPageComponent]
    });
    fixture = TestBed.createComponent(AntManPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
