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
            icon: 'simpleDotnet',
            class: 'dotnet',
          },
          {
            icon: 'simpleCsharp',
            class: 'csharp',
          },
        ],
      },
      {
        stack: [
          {
            icon: 'simpleReact',
            class: 'react',
          },
          {
            icon: 'simpleAngular',
            class: 'angular',
          },
        ],
      },
      {
        stack: [
          {
            icon: 'simpleJavascript',
            class: 'javascript',
          },
          {
            icon: 'simpleTypescript',
            class: 'typescript',
          },
        ],
      },
      {
        stack: [
          {
            icon: 'simpleSass',
            class: 'sass',
          },
          {
            icon: 'simpleCss3',
            class: 'css3',
          },
        ],
      },
    ];
  }
}
