import { Component } from '@angular/core';

import { DayNightModeToggleService } from '@app/features/day-night-mode-toggle/services/day-night-mode-toggle.service';
import { Mode } from '@app/features/models/day-night-mode.enum';

@Component({
  selector: 'app-root',
  templateUrl: '../home.component.html',
  styleUrls: ['../home.component.scss'],
})
export class HomeComponent {
  /**
   * current active mode
   */
  currentTheme: Mode = Mode.LIGHT;
  lightTheme: Mode = Mode.LIGHT;

  constructor(private dayNightModeToggleService: DayNightModeToggleService) {
    /**
     * Example code that demonstrates the modeChanged$ observable behavior and usage
     */
    this.dayNightModeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentTheme = mode;
    });
  }
}
