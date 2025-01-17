import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvShowsPageComponent } from './tv-shows-page.component';

describe('TvShowsPageComponent', () => {
  let component: TvShowsPageComponent;
  let fixture: ComponentFixture<TvShowsPageComponent>;

  beforeEach(() => {
    // Set up the testing environment for TvShowsPageComponent
    TestBed.configureTestingModule({
      declarations: [TvShowsPageComponent] // Declare the component to be tested
    });

    // Create an instance of the component fixture
    fixture = TestBed.createComponent(TvShowsPageComponent);

    // Get the instance of the component from the fixture
    component = fixture.componentInstance;

    // Trigger initial data binding and life cycle hooks
    fixture.detectChanges();
  });

  // Test case to ensure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Check if the component instance is truthy (exists)
  });
});
