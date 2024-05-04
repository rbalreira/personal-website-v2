import { Injectable } from '@angular/core';
import { ISocialMediaContent } from '@app/shared/models/social-media-content.interface';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaFactoryService {
  constructor() {}

  private github: string = 'https://github.com/rbalreira';
  private portfolioWebsite: string =
    'https://github.com/rbalreira/portfolio-website';
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
        name: 'Instagram',
        icon: 'bootstrapInstagram',
        link: 'https://www.instagram.com/rbalreira/',
      },
      {
        name: 'LinkedIn',
        icon: 'bootstrapLinkedin',
        link: 'https://www.linkedin.com/in/rbalreira/',
      },
      {
        name: 'CodePen',
        icon: 'simpleCodepen',
        link: 'https://codepen.io/rbalreira',
      },
    ];
  }

  getGithubSocialMedia(): string {
    return this.github;
  }

  getEmailSocialMedia(): string {
    return this.email;
  }

  getPortfolioWebsite(): string {
    return this.portfolioWebsite;
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
