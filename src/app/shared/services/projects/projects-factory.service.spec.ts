import { TestBed } from '@angular/core/testing';

import { ProjectsFactoryService } from './projects-factory.service';

describe('ProjectsFactoryService', () => {
  let service: ProjectsFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
