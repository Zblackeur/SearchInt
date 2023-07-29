import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRecommendationComponent } from './job-recommendation.component';

describe('JobRecommendationComponent', () => {
  let component: JobRecommendationComponent;
  let fixture: ComponentFixture<JobRecommendationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobRecommendationComponent]
    });
    fixture = TestBed.createComponent(JobRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
