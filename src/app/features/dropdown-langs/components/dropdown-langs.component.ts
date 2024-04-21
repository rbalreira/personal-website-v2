import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { LangsFactoryService } from '@app/shared/services/langs/langs-factory.service';

@Component({
  selector: 'app-dropdown-langs',
  templateUrl: '../dropdown-langs.component.html',
  styleUrls: ['../dropdown-langs.component.scss'],
})
export class DropdownLangsComponent implements OnInit {
  /**
   * selected Language shown in dropdown languages
   */
  selectedLang?: string = '';

  constructor(
    public translateService: TranslateService,
    private langsFactoryService: LangsFactoryService,
    private route: ActivatedRoute
  ) {}

  setLanguage(lang: string): void {
    this.translateService.use(lang);
    this.selectedLang = lang;
  }

  ngOnInit(): void {
    const langRoute = this.langsFactoryService.setLanguageFromRoute(
      this.route.snapshot.paramMap.get('lang')
    );

    this.selectedLang = langRoute.lang;
  }
}
