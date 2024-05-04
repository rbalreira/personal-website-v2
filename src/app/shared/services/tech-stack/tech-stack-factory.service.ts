import { Injectable } from '@angular/core';

import { ITechStack } from '@app/shared/models/tech-stack.interface';

@Injectable({
  providedIn: 'root',
})
export class TechStackFactoryService {
  constructor() {}

  public getStackContent(): ITechStack[] {
    return [
      {
        stack: [
          {
            name: '.NET Core',
            icon: 'simpleDotnet',
            class: 'dotnet',
          },
          {
            name: 'C#',
            icon: 'simpleCsharp',
            class: 'csharp',
          },
        ],
      },
      {
        stack: [
          {
            name: 'React',
            icon: 'simpleReact',
            class: 'react',
          },
          {
            name: 'Angular',
            icon: 'simpleAngular',
            class: 'angular',
          },
        ],
      },
      {
        stack: [
          {
            name: 'JavaScript',
            icon: 'simpleJavascript',
            class: 'javascript',
          },
          {
            name: 'TypeScript',
            icon: 'simpleTypescript',
            class: 'typescript',
          },
        ],
      },
      {
        stack: [
          {
            name: 'Sass',
            icon: 'simpleSass',
            class: 'sass',
          },
          {
            name: 'CSS',
            icon: 'simpleCss3',
            class: 'css3',
          },
        ],
      },
    ];
  }
}
