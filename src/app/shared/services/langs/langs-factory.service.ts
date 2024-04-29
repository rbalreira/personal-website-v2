import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ILangInfo } from '@app/shared/models/lang-info.interface';

@Injectable({
  providedIn: 'root',
})
export class LangsFactoryService {
  private defaultLang: string = 'en';
  private translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  getLanguages(): string[] {
    return [this.defaultLang, 'de', 'pt'];
  }

  getDefaultLanguage(): string {
    return this.defaultLang;
  }

  hasLanguage(lang: string): boolean {
    return this.getLanguages().includes(lang);
  }

  prepareTranslateService(): void {
    const browserLang = this.translateService.getBrowserLang();
    let defaultLang = this.getDefaultLanguage();

    if (browserLang !== undefined && this.hasLanguage(browserLang))
      defaultLang = browserLang;

    this.translateService.setDefaultLang(defaultLang);
    this.translateService.addLangs(this.getLanguages());
  }

  setLanguageFromRoute(param: any): ILangInfo {
    const langs = this.getLanguages();
    const configuredLang = param ?? this.translateService.getBrowserLang();
    const hasLang = langs.includes(configuredLang);

    let lang = hasLang ? configuredLang : this.getDefaultLanguage();
    this.translateService.use(lang);

    return {
      hasLang: hasLang,
      lang: lang,
      hasParam: param !== undefined && param !== null,
    };
  }
}
