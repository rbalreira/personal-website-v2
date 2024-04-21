import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Mode } from '@app/shared/models/day-night-mode.enum';

import { NavContentFactoryService } from '@app/shared/services/nav-content/nav-content-factory.service';
import { LangsFactoryService } from '@app/shared/services/langs/langs-factory.service';

@Component({
  selector: 'app-home',
  templateUrl: '../home.component.html',
  styleUrls: ['../home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * current active mode
   */
  currentTheme: Mode = Mode.LIGHT;

  /**
   * Get Nav Content from factory service
   */
  navContent = this.navContentFactoryService.getNavContent();

  constructor(
    private navContentFactoryService: NavContentFactoryService,
    private langsFactoryService: LangsFactoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let langInfo = this.langsFactoryService.setLanguageFromRoute(
      this.route.snapshot.paramMap.get('lang')
    );

    if (!langInfo.hasParam || !langInfo.hasLang) {
      this.router.navigate(['/', langInfo.lang]);
    }
  }
}
