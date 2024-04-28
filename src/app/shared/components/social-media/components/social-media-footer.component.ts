import { Component, ViewEncapsulation } from '@angular/core';

import { SocialMediaFactoryService } from '@app/shared/services/social-media/social-media-factory.service';

@Component({
  selector: 'app-social-media-footer',
  templateUrl: '../social-media-footer.component.html',
  styleUrls: ['../social-media.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SocialMediaFooterComponent {
  constructor(private socialMediaFactoryService: SocialMediaFactoryService) {}

  socialMedia = this.socialMediaFactoryService.getSocialMediaContent();
}
