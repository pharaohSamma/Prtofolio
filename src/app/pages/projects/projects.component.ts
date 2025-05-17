import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project One',
      description: 'This is a cool project built with Angular.',
      link: 'https://github.com/yourname/project-one',
      image: 'assets/project2.avif',
      logo: 'assets/angular-logo.png',
    },
    {
      title: 'Project Two',
      description: 'An innovative web app using TypeScript.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/project2.avif',
      logo: 'assets/ts-logo.png',
    },
    {
      title: 'Project three',
      description: 'An innovative web app using TypeScript.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/project2.avif',
      logo: 'assets/ts-logo.png',
    },
    {
      title: 'Project four',
      description: 'An innovative web app using TypeScript.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/project2.avif',
      logo: 'assets/ts-logo.png',
    },
    {
      title: 'Project five',
      description: 'An innovative web app using TypeScript.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/project2.avif',
      logo: 'assets/ts-logo.png',
    },
    {
      title: 'Project five',
      description: 'An innovative web app using TypeScript.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/project2.avif',
      logo: 'assets/ts-logo.png',
    },
  ];
}
