import { Component } from '@angular/core';

interface Skill {
  name: string;
  category: string;
  icons: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    { name: 'Angular', category: 'Frontend', icons: ['angular'] },
    { name: 'JavaScript', category: 'Frontend', icons: ['javascript'] },
    { name: 'HTML & CSS', category: 'Frontend', icons: ['html5', 'css3'] },
    { name: 'Bootstrap', category: 'Frontend', icons: ['bootstrap'] },
    { name: 'ASP.NET Core Web API', category: 'Backend', icons: ['dotnetcore'] },
    { name: 'C#', category: 'Backend', icons: ['csharp'] },
    { name: 'RESTful APIs', category: 'Backend', icons: ['rest'] },
    { name: 'JWT Authentication', category: 'Backend', icons: ['jwt'] },
    { name: 'SQL Server', category: 'Backend', icons: ['sqlserver'] },
    { name: 'LINQ', category: 'Backend', icons: ['linq'] },
    { name: 'Entity Framework Core', category: 'Backend', icons: ['efcore'] },
    { name: 'Git', category: 'Tools', icons: ['git'] },
    { name: 'GitHub', category: 'Tools', icons: ['github'] },
    { name: 'Agile Development', category: 'Tools', icons: ['agile'] },
    { name: 'AI-Assisted Development', category: 'Tools', icons: ['ai'] },
  ];

  categories = ['All', 'Frontend', 'Backend', 'Tools'];
  activeCategory = 'All';

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'All') return this.skills;
    return this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}
