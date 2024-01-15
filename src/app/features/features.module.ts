import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { bootstrapLink45deg } from '@ng-icons/bootstrap-icons';

import {
  DayNightModeStorageService,
  MODE_STORAGE_SERVICE,
} from './day-night-mode-toggle/services/day-night-mode-storage.service';
import { DayNightModeToggleService } from './day-night-mode-toggle/services/day-night-mode-toggle.service';

import { AboutMeComponent } from './about-me/components/about-me.component';
import { DayNightModeToggleComponent } from './day-night-mode-toggle/components/day-night-mode-toggle.component';
import { IntroComponent } from './intro/components/intro.component';
import { DropdownFlagsComponent } from './dropdown-flags/dropdown-flags.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    DayNightModeToggleComponent,
    IntroComponent,
    DropdownFlagsComponent,
    NavMenuComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    NgIconsModule.withIcons({ bootstrapGithub, bootstrapLink45deg }),
  ],
  exports: [
    AboutMeComponent,
    DayNightModeToggleComponent,
    IntroComponent,
    DropdownFlagsComponent,
    NavMenuComponent,
    ProjectsComponent,
  ],
  providers: [
    DayNightModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: DayNightModeStorageService,
    },
    provideNgIconsConfig({
      size: '2em',
    }),
  ],
})
export class FeaturesModule {}
