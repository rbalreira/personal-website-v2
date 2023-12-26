import { NgModule } from '@angular/core';
import {
  DayNightModeStorageService,
  MODE_STORAGE_SERVICE,
} from './services/day-night-mode-storage.service';
import { DayNightModeToggleComponent } from './components/day-night-mode-toggle.component';
import { DayNightModeToggleService } from './services/day-night-mode-toggle.service';

@NgModule({
  declarations: [DayNightModeToggleComponent],
  providers: [
    DayNightModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: DayNightModeStorageService,
    },
  ],
  exports: [DayNightModeToggleComponent],
})
export class DayNightModeToggleModule {}
