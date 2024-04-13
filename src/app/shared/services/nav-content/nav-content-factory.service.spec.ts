import { TestBed } from '@angular/core/testing';

import { NavContentFactoryService } from './nav-content-factory.service';

describe('NavContentFactoryService', () => {
  let service: NavContentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavContentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
