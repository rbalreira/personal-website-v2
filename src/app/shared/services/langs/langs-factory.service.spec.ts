import { TestBed } from '@angular/core/testing';

import { LangsFactoryService } from './langs-factory.service';

describe('LangsService', () => {
  let service: LangsFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangsFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
