import { Component } from '@angular/core';
import { Mode } from '@app/shared/components/day-night-mode-toggle/day-night-mode-toggle.model';
import { DayNightModeToggleService } from '@app/shared/components/day-night-mode-toggle/day-night-mode-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'portfolio-website';

  /**
   * current active mode
   */
  currentMode: Mode = Mode.LIGHT;
  constructor(private dayNightModeToggleService: DayNightModeToggleService) {
    /**
     * Example code that demonstrates the modeChanged$ observable behavior and usage
     */
    this.dayNightModeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }
}
