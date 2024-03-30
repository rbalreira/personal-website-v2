import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-intro',
  templateUrl: '../intro.component.html',
  styleUrls: ['../intro.component.scss'],
})
export class IntroComponent implements OnInit {
  techStack = [
    {
      id: 1,
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
        {
          name: 'Go',
          icon: 'simpleGo',
          class: 'go',
        },
      ],
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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

  ngOnInit(): void {}
}
