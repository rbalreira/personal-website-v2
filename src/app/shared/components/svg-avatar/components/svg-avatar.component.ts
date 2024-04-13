import { Component } from '@angular/core';

import { SocialMediaFactoryService } from '@app/shared/services/social-media/social-media-factory.service';

@Component({
  selector: 'app-svg-avatar',
  templateUrl: '../svg-avatar.component.html',
  styleUrls: ['../svg-avatar.component.scss'],
})
export class SvgAvatarComponent {
  constructor(private socialMediaFactoryService: SocialMediaFactoryService) {}

  fullName: string = this.socialMediaFactoryService.getFullName();
}
