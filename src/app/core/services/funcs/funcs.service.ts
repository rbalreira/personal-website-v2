import { Injectable } from '@angular/core';

import { Mode } from '@app/shared/models/day-night-mode.enum';

import { DayNightModeToggleService } from '@app/features/day-night-mode-toggle/services/day-night-mode-toggle.service';

@Injectable({
  providedIn: 'root',
})
export class FuncsService {
  constructor(private dayNightModeToggleService: DayNightModeToggleService) {}

  currentHamburgerToggleMode: boolean = false;

  getCurrentThemeMode(): boolean {
    var toggle = '';
    this.dayNightModeToggleService.modeChanged$.subscribe((value) => {
      toggle = value;
    });

    return toggle === Mode.LIGHT;
  }

  getCurrentHamburgerToggleMode(): void {
    this.currentHamburgerToggleMode = !this.currentHamburgerToggleMode;
  }
}
