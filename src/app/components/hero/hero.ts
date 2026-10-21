import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../../shared/reveal.directive';

interface StackItem {
  name: string;
  icon: string;
  mono?: boolean;
}

@Component({
  selector: 'app-hero',
  imports: [Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly profile = PROFILE;

  readonly stack: StackItem[] = [
    { name: 'C#', icon: 'csharp' },
    { name: 'ASP.NET Core', icon: 'dotnetcore' },
    { name: 'Angular', icon: 'angular' },
    { name: 'SQL Server', icon: 'sqlserver' },
    { name: 'Entity Framework Core', icon: 'efcore' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'Git / GitHub', icon: 'github', mono: true },
  ];
}
