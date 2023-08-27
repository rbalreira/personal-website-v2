import { TestBed } from '@angular/core/testing';

import { DayNightModeToggleService } from './day-night-mode-toggle.service';

describe('DayNightModeToggleService', () => {
  let service: DayNightModeToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayNightModeToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
