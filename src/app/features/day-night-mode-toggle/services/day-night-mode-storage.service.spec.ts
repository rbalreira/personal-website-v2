import { TestBed } from '@angular/core/testing';

import { DayNightModeStorageService } from './day-night-mode-storage.service';

describe('DayNightModeToggleService', () => {
  let service: DayNightModeStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayNightModeStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
