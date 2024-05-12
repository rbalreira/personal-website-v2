import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Observer } from 'gsap/all';

import { LangsFactoryService } from '@app/shared/services/langs/langs-factory.service';
import { DropdownLangsService } from './dropdown-langs.service';

@Component({
  selector: 'app-dropdown-langs',
  templateUrl: '../dropdown-langs.component.html',
  styleUrls: ['../dropdown-langs.component.scss'],
})
export class DropdownLangsComponent implements OnInit {
  /**
   * Selected Language shown in Dropdown Langs
   */
  selectedLang: string = '';
  /**
   * Retrieves Dropdown Langs Menu from DOM
   */
  @ViewChild(NgbDropdown, { static: true })
  public dropdownLangsMenu?: NgbDropdown;

  constructor(
    public translateService: TranslateService,
    private langsFactoryService: LangsFactoryService,
    private dropdownLangsService: DropdownLangsService,
    private route: ActivatedRoute
  ) {}

  setLanguage(lang: string): void {
    this.translateService.use(lang);
    this.dropdownLangsService.changeLang(lang);
  }

  ngOnInit(): void {
    const langRoute = this.langsFactoryService.setLanguageFromRoute(
      this.route.snapshot.paramMap.get('lang')
    );

    this.dropdownLangsService.changeLang(langRoute.lang);

    this.dropdownLangsService.langChanged$.subscribe((value) => {
      this.selectedLang = value;
    });

    /**
     * A GSAP Observer to close Dropdown Langs Menu when user scrolls in down direction
     */
    Observer.create({
      type: 'scroll',
      onDown: () => {
        if (this.dropdownLangsMenu !== undefined) {
          this.dropdownLangsMenu.close();
        }
      },
      onUp: () => {
        if (this.dropdownLangsMenu !== undefined) {
          this.dropdownLangsMenu.close();
        }
      },
    });
  }
}
