import { Injectable } from '@angular/core';
import { IProject } from '@app/shared/models/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsFactoryService {
  constructor() {}

  getProjects(): IProject[] {
    return [
      {
        name: 'PROJECTS.0.NAME',
        description: 'PROJECTS.0.DESCRIPTION',
        img: 'project-1.png',
        github: '/github2',
        site: '/site',
        stack: ['PostgreSQL', 'Python', 'Redis', 'Flask', 'MQTT'],
      },
      {
        name: 'PROJECTS.1.NAME',
        description: 'PROJECTS.1.DESCRIPTION',
        img: 'project-2.png',
        github: '#',
        site: '#',
        stack: [
          'PostgreSQL',
          'Python',
          'Redis',
          'Flask',
          'MQTT',
          'PostgreSQL',
          'Python',
        ],
      },
      {
        name: 'PROJECTS.2.NAME',
        description: 'PROJECTS.2.DESCRIPTION',
        img: 'project-2.png',
        github: '#',
        site: '#',
        stack: ['PostgreSQL', 'Python', 'Redis', 'Flask', 'MQTT'],
      },
    ];
  }
}
