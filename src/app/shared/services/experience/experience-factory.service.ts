import { Injectable } from '@angular/core';

import { IExperience } from '@app/shared/models/experience.interface';

@Injectable({
  providedIn: 'root',
})
export class ExperienceFactoryService {
  constructor() {}

  getExperience(): IExperience[] {
    return [
      {
        name: 'EXPERIENCE.0.NAME',
        navItem: 'criticalManufacturing',
        website: 'https://www.criticalmanufacturing.com/',
        role: 'EXPERIENCE.0.ROLE',
        duration: 'EXPERIENCE.0.DURATION',
        activities: [
          'EXPERIENCE.0.ACTIVITIES.0',
          'EXPERIENCE.0.ACTIVITIES.1',
          'EXPERIENCE.0.ACTIVITIES.2',
        ],
        stack: ['.NET', 'C#', 'Angular'],
      },
      {
        name: 'EXPERIENCE.1.NAME',
        navItem: 'mafirol',
        website: 'https://mafirol.pt/',
        role: 'EXPERIENCE.1.ROLE',
        duration: 'EXPERIENCE.1.DURATION',
        activities: [
          'EXPERIENCE.1.ACTIVITIES.0',
          'EXPERIENCE.1.ACTIVITIES.1',
          'EXPERIENCE.1.ACTIVITIES.2',
          'EXPERIENCE.1.ACTIVITIES.3',
          'EXPERIENCE.1.ACTIVITIES.4',
          'EXPERIENCE.1.ACTIVITIES.5',
        ],
        stack: [
          '.NET',
          'C#',
          'React',
          'Microsoft SQL Server',
          'Nginx',
          'Docker',
        ],
      },
      {
        name: 'EXPERIENCE.2.NAME',
        navItem: 'wavecom',
        website: 'https://wavecom.pt/',
        role: 'EXPERIENCE.2.ROLE',
        duration: 'EXPERIENCE.2.DURATION',
        activities: [
          'EXPERIENCE.2.ACTIVITIES.0',
          'EXPERIENCE.2.ACTIVITIES.1',
          'EXPERIENCE.2.ACTIVITIES.2',
          'EXPERIENCE.2.ACTIVITIES.3',
          'EXPERIENCE.2.ACTIVITIES.4',
          'EXPERIENCE.2.ACTIVITIES.5',
        ],
        stack: ['PostgreSQL', 'Python', 'Redis', 'Flask', 'MQTT'],
      },
    ];
  }
}
