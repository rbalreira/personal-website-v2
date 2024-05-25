import { Injectable } from '@angular/core';
import { ISocialMediaContent } from '@app/shared/models/social-media-content.interface';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaFactoryService {
  constructor() {}

  private github: string = 'https://github.com/rbalreira';
  private personalWebsite: string =
    'https://github.com/rbalreira/personal-website-v2';
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
        link: 'https://www.linkedin.com/in/rbalreira/',
      },
    ];
  }

  getGithubSocialMedia(): string {
    return this.github;
  }

  getEmailSocialMedia(): string {
    return this.email;
  }

  getPersonalWebsite(): string {
    return this.personalWebsite;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
