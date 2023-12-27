import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import {
  DayNightModeStorageService,
  MODE_STORAGE_SERVICE,
} from './day-night-mode-toggle/services/day-night-mode-storage.service';
import { DayNightModeToggleService } from './day-night-mode-toggle/services/day-night-mode-toggle.service';

import { AboutMeComponent } from './about-me/components/about-me.component';
import { DayNightModeToggleComponent } from './day-night-mode-toggle/components/day-night-mode-toggle.component';
import { IntroComponent } from './intro/components/intro.component';

@NgModule({
  declarations: [AboutMeComponent, DayNightModeToggleComponent, IntroComponent],
  providers: [
    DayNightModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: DayNightModeStorageService,
    },
  ],
  imports: [CommonModule, SharedModule],
  exports: [AboutMeComponent, DayNightModeToggleComponent, IntroComponent],
})
export class FeaturesModule {}
