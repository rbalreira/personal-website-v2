import { Component } from '@angular/core';

import { SocialMediaFactoryService } from '@app/shared/services/social-media/social-media-factory.service';

@Component({
  selector: 'app-footer',
  templateUrl: '../footer.component.html',
  styleUrls: ['../footer.component.scss'],
})
export class FooterComponent {
  constructor(private socialMediaFactoryService: SocialMediaFactoryService) {}

  portfolioWebsite: string = this.socialMediaFactoryService.getRepositoryUrl();
  linkedin: string = this.socialMediaFactoryService.getLinkedinSocialMedia();
  fullName: string = this.socialMediaFactoryService.getFullName();
  creativeCommonsLicenseUrl: string =
    this.socialMediaFactoryService.getCreativeCommonsLicenseUrl();
  creativeCommonsLicense: string =
    this.socialMediaFactoryService.getCreativeCommonsLicense();
}
