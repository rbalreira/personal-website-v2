import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: '../projects.component.html',
  styleUrls: ['../projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'Project 1',
      description:
        'A platform for posting courses which are designed as per the Industry demand with full Career Assistance.',
      img: 'project-1.png',
      github: '#',
      site: '#',
    },
    {
      id: 2,
      name: 'Project 2',
      description:
        "Easy Staff allows you to manage your staff's attendance, salary and payments in few clicks.",
      img: 'project-2.png',
      github: '#',
      site: '#',
    },
  ];
}
