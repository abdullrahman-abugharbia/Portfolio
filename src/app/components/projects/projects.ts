import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../../shared/reveal.directive';

interface Project {
  title: string;
  subtitle: string;
  label: string;
  description: string;
  context: string;
  tags: string[];
  // Screenshot in public/projects; projects without one get an illustrative frame.
  image?: string;
  previewIcon: string;
  link?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly profile = PROFILE;

  readonly projects: Project[] = [
    {
      title: 'ARP Peptide',
      subtitle: 'Live Website',
      label: 'Published Website',
      description: 'Contributed to the development and publication of a live research-peptide website during my remote web development internship at max-level-ksa, taking the work from implementation through to a publicly accessible site.',
      context: 'Web Development Intern · max-level-ksa',
      tags: ['AI-Assisted Development', 'Web Development', 'Live Website'],
      image: 'projects/arp-peptide.webp',
      previewIcon: 'bi-globe2',
      link: 'https://www.arppeptide.com/',
    },
    {
      title: 'Fluffy Pet',
      subtitle: 'E-Commerce Web Application',
      label: 'Academic Project',
      description: 'Team-based e-commerce web application with customer registration, cart management, API integration, and frontend-backend communication.',
      context: 'Team-based academic project',
      tags: ['C#', 'ASP.NET', 'Angular', 'Bootstrap', 'SQL Server'],
      previewIcon: 'bi-shop',
    },
  ];

  host(url: string) {
    return new URL(url).hostname.replace(/^www\./, '');
  }
}
