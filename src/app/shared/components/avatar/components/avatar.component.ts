import { Component } from '@angular/core';

import { SocialMediaFactoryService } from '@app/shared/services/social-media/social-media-factory.service';

@Component({
  selector: 'app-avatar',
  templateUrl: '../avatar.component.html',
  styleUrls: ['../avatar.component.scss'],
})
export class AvatarComponent {
  constructor(private socialMediaFactoryService: SocialMediaFactoryService) {}

  fullName: string = this.socialMediaFactoryService.getFullName();
}
