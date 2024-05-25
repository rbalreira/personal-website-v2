import { Component } from '@angular/core';

import { SocialMediaFactoryService } from '@app/shared/services/social-media/social-media-factory.service';

@Component({
  selector: 'app-footer',
  templateUrl: '../footer.component.html',
  styleUrls: ['../footer.component.scss'],
})
export class FooterComponent {
  constructor(private socialMediaFactoryService: SocialMediaFactoryService) {}

  portfolioWebsite = this.socialMediaFactoryService.getPersonalWebsite();
}
