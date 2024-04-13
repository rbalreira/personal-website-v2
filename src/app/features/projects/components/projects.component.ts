import { Component } from '@angular/core';
import { ProjectsFactoryService } from '@app/shared/services/projects/projects-factory.service';

@Component({
  selector: 'app-projects',
  templateUrl: '../projects.component.html',
  styleUrls: ['../projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private projectsFactoryService: ProjectsFactoryService) {}

  projects = this.projectsFactoryService.getProjects();
}
