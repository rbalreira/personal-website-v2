import { TestBed } from '@angular/core/testing';

import { TechStackFactoryService } from './tech-stack-factory.service';

describe('TechStackFactoryService', () => {
  let service: TechStackFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechStackFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
