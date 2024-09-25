import { Component } from '@angular/core';

import { ITechStack } from '@app/shared/models/tech-stack.interface';

import { TechStackFactoryService } from '@app/shared/services/tech-stack/tech-stack-factory.service';
import { SocialMediaFactoryService } from '@app/shared/services/social-media/social-media-factory.service';

@Component({
  selector: 'app-intro',
  templateUrl: '../intro.component.html',
  styleUrls: ['../intro.component.scss'],
})
export class IntroComponent {
  constructor(
    private techStackFactoryService: TechStackFactoryService,
    private socialMediaFactoryService: SocialMediaFactoryService
  ) {}

  techStack: ITechStack[] = this.techStackFactoryService.getStackContent();
  firstName: string = this.socialMediaFactoryService.getFirstName();
  lastName: string = this.socialMediaFactoryService.getLastName();
}
