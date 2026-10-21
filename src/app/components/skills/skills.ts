import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal.directive';

interface Skill {
  name: string;
  // Logo file in public/icons, or a Bootstrap Icons class when no logo applies.
  logo?: string;
  bi?: string;
  mono?: boolean;
}

interface SkillGroup {
  title: string;
  summary: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly groups: SkillGroup[] = [
    {
      title: 'Backend Development',
      summary: 'Server-side logic and APIs.',
      icon: 'bi-hdd-stack',
      skills: [
        { name: 'C#', logo: 'csharp' },
        { name: 'ASP.NET Core Web API', logo: 'dotnetcore' },
        { name: 'RESTful APIs', logo: 'rest' },
        { name: 'CRUD Operations', bi: 'bi-arrow-left-right' },
        { name: 'Authentication & JWT', logo: 'jwt', mono: true },
      ],
    },
    {
      title: 'Frontend Development',
      summary: 'Responsive web interfaces.',
      icon: 'bi-window-sidebar',
      skills: [
        { name: 'Angular', logo: 'angular' },
        { name: 'JavaScript', logo: 'javascript' },
        { name: 'HTML5', logo: 'html5' },
        { name: 'CSS3', logo: 'css3' },
        { name: 'Bootstrap', logo: 'bootstrap' },
        { name: 'Responsive UI', bi: 'bi-phone' },
        { name: 'Component-Based Development', bi: 'bi-boxes' },
      ],
    },
    {
      title: 'Database',
      summary: 'Relational data and data access.',
      icon: 'bi-database',
      skills: [
        { name: 'SQL Server', logo: 'sqlserver' },
        { name: 'Entity Framework Core', logo: 'efcore' },
        { name: 'LINQ', logo: 'linq' },
      ],
    },
    {
      title: 'Tools & Practices',
      summary: 'How the work gets done.',
      icon: 'bi-tools',
      skills: [
        { name: 'Git', logo: 'git' },
        { name: 'GitHub', logo: 'github', mono: true },
        { name: 'API Integration', bi: 'bi-plug' },
        { name: 'Debugging', bi: 'bi-bug' },
        { name: 'Agile Development', bi: 'bi-kanban' },
        { name: 'AI-Assisted Development', bi: 'bi-stars' },
      ],
    },
  ];
}
