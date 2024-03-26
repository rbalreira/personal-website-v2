import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsV2Component } from './projects-v2.component';

describe('ProjectsV2Component', () => {
  let component: ProjectsV2Component;
  let fixture: ComponentFixture<ProjectsV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsV2Component]
    });
    fixture = TestBed.createComponent(ProjectsV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
