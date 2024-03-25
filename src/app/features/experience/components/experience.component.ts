import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: '../experience.component.html',
  styleUrls: ['../experience.component.scss'],
})
export class ExperienceComponent {
  experiences = [
    {
      id: 1,
      name: 'Critical Manufacturing',
      role: 'Software Engineer',
      duration: 'Feb 2022 - Present',
      activities: [
        'A platform for posting courses which are designed as per the Industry demand with full Career Assistance.',
        'A platform for posting courses which are designed as per the Industry demand with full Career Assistance.',
        'A platform for posting courses which are designed as per the Industry demand with full Career Assistance.',
      ],
      stack: [
        {
          name: '.NET',
          icon: 'simpleDotnet',
        },
        {
          name: 'C#',
          icon: 'simpleCsharp',
        },
        {
          name: 'Angular',
          icon: 'simpleAngular',
        },
      ],
    },
    {
      id: 2,
      name: 'Mafirol Group',
      role: 'Full Stack Developer',
      duration: 'Mar 2021 - Jan 2022',
      activities: [
        'Maintenance and enhancement of internal .NET Framework C# Web applications.',
        'Maintenance of external Web application developed in .NET Core C#, Vue.js and MySQL',
        'Renewal of the company website creating Web application using .NET Core C# and React framework',
        'Database modeling and implementation in SQL Server',
        'Development of RESTFul API in order to send and store information in Database',
        'Implementation of translation management framework (i18next) in web application',
      ],
      stack: [
        {
          name: '.NET',
          icon: 'simpleDotnet',
        },
        {
          name: 'C#',
          icon: 'simpleCsharp',
        },
        {
          name: 'React',
          icon: 'simpleReact',
        },
        {
          name: 'Microsoft SQL Server',
          icon: 'simpleMicrosoftsqlserver',
        },
        {
          name: 'Nginx',
          icon: 'simpleNginx',
        },
        {
          name: 'Docker',
          icon: 'simpleDocker',
        },
      ],
    },
    {
      id: 3,
      name: 'Wavecom',
      role: 'Backend Developer',
      duration: 'Mar 2020 - Jul 2020',
      activities: [
        'Python course on web application development using Flask framework',
        "Study of Python's unittest, pytest and Mock libraries",
        "Study of Git's workflow and methodologies",
        'Analysis of the structure of a Flask application in production (microservice)',
        'Implementation of unit tests in Python',
        'Localization algorithm in Python that calculates the position of a tag accordingly to the incoming signal by different gateways',
      ],
      stack: [
        {
          name: 'PostgreSQL',
          icon: 'simplePostgresql',
        },
        {
          name: 'Python',
          icon: 'simplePython',
        },
        {
          name: 'Redis',
          icon: 'simpleRedis',
        },
        {
          name: 'Flask',
          icon: 'simpleFlask',
        },
        {
          name: 'MQTT',
          icon: 'simpleMqtt',
        },
      ],
    },
  ];
}
