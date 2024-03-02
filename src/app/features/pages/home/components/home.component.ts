import { Component } from '@angular/core';

import { DayNightModeToggleService } from '@app/features/day-night-mode-toggle/services/day-night-mode-toggle.service';
import { FuncsService } from '@app/core/services/funcs/funcs.service';
import { Mode } from '@app/features/models/day-night-mode.enum';

@Component({
  selector: 'app-root',
  templateUrl: '../home.component.html',
  styleUrls: ['../home.component.scss'],
})
export class HomeComponent {
  title = 'portfolio-website';
  /**
   * current active mode
   */
  currentMode: Mode = Mode.LIGHT;
  currentTheme = this.funcs.getCurrentThemeMode();

  constructor(
    private funcs: FuncsService,
    private dayNightModeToggleService: DayNightModeToggleService
  ) {
    /**
     * Example code that demonstrates the modeChanged$ observable behavior and usage
     */
    this.dayNightModeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }
}
