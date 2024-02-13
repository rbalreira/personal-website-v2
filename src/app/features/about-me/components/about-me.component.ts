import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: '../about-me.component.html',
  styleUrls: ['../about-me.component.scss'],
})
export class AboutMeComponent {
  subTitle = 'Full-Stack Developer based in Aveiro, Portugal';
  description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
