import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../../shared/reveal.directive';

interface StackGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-about',
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly profile = PROFILE;

  readonly facts = [
    { icon: 'bi-geo-alt', label: 'Location', value: PROFILE.location },
    { icon: 'bi-crosshair', label: 'Focus', value: 'Full-stack web applications' },
    { icon: 'bi-mortarboard', label: 'Education', value: 'Computer Information Systems' },
    { icon: 'bi-translate', label: 'Languages', value: 'Arabic (Native) · English (Intermediate)' },
  ];

  readonly stack: StackGroup[] = [
    { label: 'Languages', items: ['C#', 'JavaScript', 'HTML5', 'CSS3'] },
    { label: 'Backend', items: ['ASP.NET Core Web API', 'RESTful APIs'] },
    { label: 'Frontend', items: ['Angular', 'Bootstrap'] },
    { label: 'Data', items: ['SQL Server', 'EF Core', 'LINQ'] },
    { label: 'Workflow', items: ['Git', 'GitHub', 'Agile'] },
  ];
}
