import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  label: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'ARP Peptide – Live Website',
      label: 'Published Website',
      description: 'Contributed to the development and publication of a live research-peptide website during my web development internship, taking the work from implementation through to a publicly accessible site.',
      tags: ['AI-Assisted Development', 'Web Development', 'Live Website'],
      gradientFrom: '#001b44',
      gradientTo: '#002f6c',
      icon: 'bi-globe2',
      link: 'https://www.arppeptide.com/',
    },
    {
      title: 'Fluffy Pet – E-Commerce Web Application',
      label: 'Academic Project · In Progress',
      description: 'Team-based academic e-commerce web application, currently in development.',
      tags: ['C#', 'ASP.NET', 'Angular', 'Bootstrap'],
      gradientFrom: '#1a1040',
      gradientTo: '#2d1b69',
      icon: 'bi-shop',
    },
  ];
}
