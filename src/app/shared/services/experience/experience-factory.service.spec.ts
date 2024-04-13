import { TestBed } from '@angular/core/testing';

import { ExperienceFactoryService } from './experience-factory.service';

describe('ExperienceFactoryService', () => {
  let service: ExperienceFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
