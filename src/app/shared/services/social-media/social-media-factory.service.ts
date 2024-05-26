import { Injectable } from '@angular/core';
import { ISocialMediaContent } from '@app/shared/models/social-media-content.interface';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaFactoryService {
  constructor() {}

  private github: string = 'https://github.com/rbalreira';
  private linkedin: string = 'https://www.linkedin.com/in/rbalreira/';
  private repositoryUrl: string =
    'https://github.com/rbalreira/personal-website-v2';
  private creativeCommonsLicenseUrl: string =
    'https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1';
  private creativeCommonsLicense: string = 'CC BY-NC 4.0';
  private email: string = 'rbalreira@outlook.com';
  private firstName: string = 'Ricardo';
  private lastName: string = 'Balreira';

  getSocialMediaContent(): ISocialMediaContent[] {
    return [
      {
        name: 'GitHub',
        icon: 'bootstrapGithub',
        link: this.getGithubSocialMedia(),
      },
      {
        name: 'LinkedIn',
        icon: 'bootstrapLinkedin',
        link: this.getLinkedinSocialMedia(),
      },
    ];
  }

  getGithubSocialMedia(): string {
    return this.github;
  }

  getLinkedinSocialMedia(): string {
    return this.linkedin;
  }

  getEmailSocialMedia(): string {
    return this.email;
  }

  getRepositoryUrl(): string {
    return this.repositoryUrl;
  }

  getCreativeCommonsLicenseUrl(): string {
    return this.creativeCommonsLicenseUrl;
  }

  getCreativeCommonsLicense(): string {
    return this.creativeCommonsLicense;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
