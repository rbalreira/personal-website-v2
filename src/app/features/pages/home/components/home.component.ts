import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Mode } from '@app/shared/models/day-night-mode.enum';

import { DayNightModeToggleService } from '@app/features/day-night-mode-toggle/services/day-night-mode-toggle.service';
import { NavContentFactoryService } from '@app/shared/services/nav-content/nav-content-factory.service';

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

  constructor(
    private dayNightModeToggleService: DayNightModeToggleService,
    private navContentFactoryService: NavContentFactoryService,
    translateService: TranslateService
  ) {
    /**
     * Example code that demonstrates the modeChanged$ observable behavior and usage
     */
    this.dayNightModeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentTheme = mode;
    });

    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // add languages to list
    translateService.addLangs(['en', 'de', 'pt']);

    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang?.match('en|de|pt') ? browserLang : 'en');
  }

  navContent = this.navContentFactoryService.getNavContent();
}
