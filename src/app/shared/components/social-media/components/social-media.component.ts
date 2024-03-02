import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: '../social-media.component.html',
  styleUrls: ['../social-media.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SocialMediaComponent {
  @Input() footer = true;

  socialMedia = [
    {
      id: 1,
      name: 'GitHub',
      icon: 'bootstrapGithub',
      href: 'https://github.com/rbalreira',
    },
    {
      id: 2,
      name: 'Instagram',
      icon: 'bootstrapInstagram',
      href: 'https://www.instagram.com/rbalreira/',
    },
    {
      id: 3,
      name: 'LinkedIn',
      icon: 'bootstrapLinkedin',
      href: 'https://www.linkedin.com/in/rbalreira/',
    },
    {
      id: 4,
      name: 'CodePen',
      icon: 'simpleCodepen',
      href: 'https://codepen.io/rbalreira',
    },
  ];
}
