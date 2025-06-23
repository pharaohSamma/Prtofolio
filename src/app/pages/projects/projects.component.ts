import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Banc in C language',
      description: 'This is a banking system coded in C language.',
      link: 'https://github.com/yourname/project-one',
      image: 'assets/C_Programming_Language.svg.png',
    },
    {
      title: 'E-commerce application',
      description: 'A shoe store front-end application.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/html-css-js-1.png',
    },
    {
      title: 'Dental Office',
      description: 'a VB .net application for manging a dental office.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/vbdotnet.jpg',
    },
    {
      title: 'optician s office',
      description: 'Using PHP HTML and CSS fro developing this application.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/php.png',
    },
    {
      title: 'School managment',
      description: 'Using PHP HTML and CSS fro developing this application named EduTasker.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/php.png',
    },
    {
      title: 'Inventory managment',
      description: 'An Inventory managment in Java.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/java.png',
    },
     {
      title: 'Chat application',
      description: 'a messaging application progremmed using Python.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/python.png',
    },
     {
      title: 'Hotel managment',
      description: 'SpringBoot application for hotel managment.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/springboot.png',
    },
     {
      title: 'School managment',
      description: 'Using Springboot/Angular this application was founded.',
      link: 'https://github.com/yourname/project-two',
      image: 'assets/springangular.png',
    },
  ];
}
