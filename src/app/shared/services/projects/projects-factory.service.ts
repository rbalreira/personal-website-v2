import { Injectable } from '@angular/core';
import { IProject } from '@app/shared/models/project.interface';
import { SocialMediaFactoryService } from '../social-media/social-media-factory.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsFactoryService {
  constructor(private socialMediaFactoryService: SocialMediaFactoryService) {}

  getProjects(): IProject[] {
    return [
      {
        name: 'PROJECTS.0.NAME',
        description: 'PROJECTS.0.DESCRIPTION',
        site: 'https://mafirol.pt/',
        stack: ['.NET Core', 'C#', 'React', 'SCSS', 'Microsoft SQL Server'],
      },
      {
        name: 'PROJECTS.1.NAME',
        description: 'PROJECTS.1.DESCRIPTION',
        github: this.socialMediaFactoryService.getPortfolioWebsite(),
        site: '/',
        stack: ['Angular', 'SCSS', 'GSAP'],
      },
    ];
  }
}
