import { Component } from '@angular/core';
import { DayNightModeToggleService } from './day-night-mode-toggle.service';

@Component({
  selector: 'day-night-mode-toggle',
  templateUrl: './day-night-mode-toggle.component.html',
  styleUrls: ['./day-night-mode-toggle.component.scss'],
})
export class DayNightModeToggleComponent {
  constructor(private dayNightModeToggleService: DayNightModeToggleService) {}

  toggle() {
    this.dayNightModeToggleService.toggleMode();
  }
}
