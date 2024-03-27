import { Component } from '@angular/core';

import { DayNightModeToggleService } from '../services/day-night-mode-toggle.service';
import { FuncsService } from '@app/core/services/funcs/funcs.service';

@Component({
  selector: 'day-night-mode-toggle',
  templateUrl: '../day-night-mode-toggle.component.html',
  styleUrls: ['../day-night-mode-toggle.component.scss'],
})
export class DayNightModeToggleComponent {
  constructor(
    private funcs: FuncsService,
    private dayNightModeToggleService: DayNightModeToggleService
  ) {}

  toggle() {
    this.dayNightModeToggleService.toggleMode();
  }

  themeMode = this.funcs.getCurrentThemeMode();
}
