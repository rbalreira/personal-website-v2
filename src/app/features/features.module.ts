import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import {
  bootstrapBrightnessHigh,
  bootstrapMoon,
  bootstrapLink45deg,
  bootstrapArrowDownCircle,
  bootstrapPinFill,
} from '@ng-icons/bootstrap-icons';
import {
  simpleDotnet,
  simpleCsharp,
  simpleGo,
  simpleReact,
  simpleAngular,
  simpleJavascript,
  simpleTypescript,
  simpleSass,
  simpleCss3,
  simpleMicrosoftsqlserver,
  simpleNginx,
  simpleDocker,
  simplePostgresql,
  simplePython,
  simpleRedis,
  simpleFlask,
  simpleMqtt,
} from '@ng-icons/simple-icons';

import {
  DayNightModeStorageService,
  MODE_STORAGE_SERVICE,
} from './day-night-mode-toggle/services/day-night-mode-storage.service';
import { DayNightModeToggleService } from './day-night-mode-toggle/services/day-night-mode-toggle.service';

import { AboutMeComponent } from './about-me/components/about-me.component';
import { DayNightModeToggleComponent } from './day-night-mode-toggle/components/day-night-mode-toggle.component';
import { IntroComponent } from './intro/components/intro.component';
import { DropdownFlagsComponent } from './dropdown-flags/components/dropdown-flags.component';
import { NavMenuComponent } from './nav-menu/components/nav-menu.component';
import { ProjectsComponent } from './projects/components/projects.component';
import { ExperienceComponent } from './experience/components/experience.component';
import { ContactComponent } from './contact/components/contact.component';

@NgModule({
  declarations: [
    DayNightModeToggleComponent,
    IntroComponent,
    DropdownFlagsComponent,
    NavMenuComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    NgbNavModule,
    NgIconsModule.withIcons({
      bootstrapBrightnessHigh,
      bootstrapMoon,
      bootstrapLink45deg,
      bootstrapArrowDownCircle,
      bootstrapPinFill,
      simpleDotnet,
      simpleCsharp,
      simpleGo,
      simpleReact,
      simpleAngular,
      simpleJavascript,
      simpleTypescript,
      simpleSass,
      simpleCss3,
      simpleMicrosoftsqlserver,
      simpleNginx,
      simpleDocker,
      simplePostgresql,
      simplePython,
      simpleRedis,
      simpleFlask,
      simpleMqtt,
    }),
  ],
  exports: [
    DayNightModeToggleComponent,
    IntroComponent,
    DropdownFlagsComponent,
    NavMenuComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent,
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
