import { TestBed } from '@angular/core/testing';

import { DropdownLangsService } from './dropdown-langs.service';

describe('DropdownLangsServiceTsService', () => {
  let service: DropdownLangsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownLangsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
