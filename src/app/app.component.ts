import { Component } from '@angular/core';

import { Mode } from './shared/models/day-night-mode.enum';

import { DayNightModeToggleService } from '@app/features/day-night-mode-toggle/services/day-night-mode-toggle.service';
import { LangsFactoryService } from './shared/services/langs/langs-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  /**
   * current active mode
   */
  currentTheme: Mode = Mode.LIGHT;

  constructor(
    private dayNightModeToggleService: DayNightModeToggleService,
    private langsFactoryService: LangsFactoryService
  ) {
    /**
     * Change current Theme when modeChanged$ observable is triggered
     */
    this.dayNightModeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentTheme = mode;
    });

    /**
     * Set translate service languages to be used and also the default one
     */
    this.langsFactoryService.prepareTranslateService();
  }
}
