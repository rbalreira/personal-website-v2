import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dropdown-langs',
  templateUrl: '../dropdown-langs.component.html',
  styleUrls: ['../dropdown-langs.component.scss'],
})
export class DropdownLangsComponent {
  selectedFlag?: string = '';

  constructor(public translateService: TranslateService) {
    this.selectedFlag = translateService.getBrowserLang();
  }

  changeDropdownToggleValue(lang: string): void {
    this.translateService.use(lang);
    this.selectedFlag = lang;
  }
}
