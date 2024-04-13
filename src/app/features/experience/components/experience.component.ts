import { Component } from '@angular/core';
import { ExperienceFactoryService } from '@app/shared/services/experience/experience-factory.service';

@Component({
  selector: 'app-experience',
  templateUrl: '../experience.component.html',
  styleUrls: ['../experience.component.scss'],
})
export class ExperienceComponent {
  constructor(private experienceFactoryService: ExperienceFactoryService) {}

  experiences = this.experienceFactoryService.getExperience();
}
