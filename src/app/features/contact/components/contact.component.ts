import { Component } from '@angular/core';

import { SocialMediaFactoryService } from '@app/shared/services/social-media/social-media-factory.service';

@Component({
  selector: 'app-contact',
  templateUrl: '../contact.component.html',
  styleUrls: ['../contact.component.scss'],
})
export class ContactComponent {
  constructor(private socialMediaFactoryService: SocialMediaFactoryService) {}

  email = this.socialMediaFactoryService.getEmailSocialMedia();
}
