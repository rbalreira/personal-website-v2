import { Injectable } from '@angular/core';
import { DayNightModeToggleService } from '@app/features/day-night-mode-toggle/services/day-night-mode-toggle.service';
import { Mode } from '@app/features/day-night-mode-toggle/models/day-night-mode-toggle.model';

@Injectable({
  providedIn: 'root',
})
export class FuncsService {
  constructor(private dayNightModeToggleService: DayNightModeToggleService) {}

  getCurrentThemeMode() {
    var toggle = '';
    this.dayNightModeToggleService.modeChanged$.subscribe((value) => {
      toggle = value;
    });

    return toggle === Mode.LIGHT;
  }
}
