import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { LangsFactoryService } from '@app/shared/services/langs/langs-factory.service';

@Injectable({
  providedIn: 'root',
})
export class DropdownLangsService {
  /**
   * contains the current active lang
   * avoid mutating it directly, instead use `updateCurrentLang`
   */
  private currentLang: string = this.langsFactoryService.getDefaultLanguage();

  /**
   * BehaviorSubject that detects the lang changes
   */
  private langChangedSubject = new BehaviorSubject(this.currentLang);

  /**
   * Observable that emits the current lang when lang changes.
   * Exposed publicly so that other components can use this feature
   */
  langChanged$: Observable<string>;

  constructor(private langsFactoryService: LangsFactoryService) {
    this.langChanged$ = this.langChangedSubject.asObservable();
  }

  /**
   * Function to mutate the currentLang
   * @param lang Lang
   */
  private updateCurrentLang(lang: string): void {
    this.langChangedSubject.next(lang);
  }

  /**
   * Function that changes the lang
   * Exposed publicly
   */
  changeLang(lang: string): void {
    this.updateCurrentLang(lang);
  }
}
