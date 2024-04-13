import { Component, Input, ViewEncapsulation } from '@angular/core';

import { SocialMediaFactoryService } from '@app/shared/services/social-media/social-media-factory.service';

@Component({
  selector: 'app-social-media',
  templateUrl: '../social-media.component.html',
  styleUrls: ['../social-media.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SocialMediaComponent {
  constructor(private socialMediaFactoryService: SocialMediaFactoryService) {}

  @Input() footer = true;

  socialMedia = this.socialMediaFactoryService.getSocialMediaContent();
}
