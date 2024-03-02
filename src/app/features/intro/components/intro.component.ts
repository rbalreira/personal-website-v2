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
        },
        {
          name: 'C#',
          icon: 'simpleCsharp',
        },
        {
          name: 'Go',
          icon: 'simpleGo',
        },
      ],
    },
    {
      id: 2,
      stack: [
        {
          name: 'React',
          icon: 'simpleReact',
        },
        {
          name: 'Angular',
          icon: 'simpleAngular',
        },
      ],
    },
    {
      id: 3,
      stack: [
        {
          name: 'JavaScript',
          icon: 'simpleJavascript',
        },
        {
          name: 'TypeScript',
          icon: 'simpleTypescript',
        },
      ],
    },
    {
      id: 4,
      stack: [
        {
          name: 'Sass',
          icon: 'simpleSass',
        },
        {
          name: 'CSS',
          icon: 'simpleCss3',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
