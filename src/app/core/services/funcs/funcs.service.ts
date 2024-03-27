import { Injectable } from '@angular/core';

import { DayNightModeToggleService } from '@app/features/day-night-mode-toggle/services/day-night-mode-toggle.service';

import { Mode } from '@app/features/models/day-night-mode.enum';

@Injectable({
  providedIn: 'root',
})
export class FuncsService {
  constructor(private dayNightModeToggleService: DayNightModeToggleService) {}

  currentHamburgerToggleMode: boolean = false;

  getCurrentThemeMode() {
    var toggle = '';
    this.dayNightModeToggleService.modeChanged$.subscribe((value) => {
      toggle = value;
    });

    return toggle === Mode.LIGHT;
  }

  getCurrentHamburgerToggleMode() {
    this.currentHamburgerToggleMode = !this.currentHamburgerToggleMode;
  }
}
