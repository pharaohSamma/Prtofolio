import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  educationTimeline = [
    {
      year: '2020',
      title: 'Started University',
      description: 'Began my journey in Computer Science.',
      logo: 'assets/university.png',
    },
    {
      year: '2021',
      title: 'First Projects',
      description:
        'Built my first web applications and learned new technologies.',
      logo: 'assets/icons/code.svg',
    },
    {
      year: '2022',
      title: 'Internship',
      description: 'Gained hands-on experience in software development.',
      logo: 'assets/icons/internship.svg',
    },
    {
      year: '2024',
      title: 'Graduation',
      description: 'Successfully completed my degree in Computer Science.',
      logo: 'assets/icons/graduation.svg',
    },
  ];
}
