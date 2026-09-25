import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Skill {
  name: string;
  svg: SafeHtml;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private sanitizer = inject(DomSanitizer);

  private svg(raw: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  }

  skills: Skill[] = [
    {
      name: 'Angular', category: 'Frontend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#dd0031"><path d="M12 2.5L2 6.5l1.5 12.5L12 22.5l8.5-3.5L22 6.5 12 2.5zm0 2.2l7.3 3-1.3 10.8-6 2.5-6-2.5L4.7 7.7 12 4.7zm0 2.8L7.5 18h1.8l.9-2.3h3.6l.9 2.3h1.8L12 7.5zm0 2.4l1.4 3.6h-2.8L12 9.9z"/></svg>`)
    },
    {
      name: 'JavaScript', category: 'Frontend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#f7df1e"/><path d="M15.5 17.5c.3.6.8 1 1.5 1 .6 0 1-.3 1-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.1-.5-1.8-1.1-1.8-2.3 0-1.1.9-2 2.2-2 1 0 1.7.4 2.1 1.3l-1.2.7c-.2-.4-.5-.7-.9-.7-.4 0-.7.3-.7.6 0 .4.3.6.9.8l.4.2c1.3.5 2 1.2 2 2.4 0 1.3-1 2.2-2.5 2.2-1.4 0-2.3-.7-2.7-1.6l1.2-.7zm-5.5.3c.2.4.4.7.9.7.4 0 .7-.2.7-.8v-4.7h1.5V18c0 1.4-.8 2-2.1 2-1.1 0-1.8-.6-2.1-1.4l1.1-.8z" fill="black"/></svg>`)
    },
    {
      name: 'HTML & CSS', category: 'Frontend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#e34f26"><path d="M3 2h18l-1.6 18L12 22 4.6 20 3 2zm2.2 2l1.3 14.4L12 19.8l5.5-1.4 1.1-12.4H5.2zm9.6 5H8.4l.2 2h6l-.3 3.6L12 15l-2.3-.6-.2-2H8l.4 3.7L12 17.5l3.6-1-1.3-6.5H9.8l-.2-2h6.3l-.1-1z"/></svg>`)
    },
    {
      name: 'Bootstrap', category: 'Frontend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#7952b3"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5H8V7.5h2.5c1.8 0 3 .9 3 2.5 0 1-.5 1.7-1.3 2.1.9.3 1.8 1.1 1.8 2.4 0 1.9-1.5 2.5-3.5 2.5zm.2-6.3H9.5v2h1.2c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1zm.3 3.3H9.5v2.2h1.5c.9 0 1.5-.4 1.5-1.1s-.6-1.1-1.5-1.1z"/></svg>`)
    },
    {
      name: 'ASP.NET Core Web API', category: 'Backend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#512bd4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`)
    },
    {
      name: 'C#', category: 'Backend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#239120"><path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2zm0 2.2l7.3 3-7.3 3.6-7.3-3.6 7.3-3zm-7.5 4.7l7 3.5v7.4l-7-3.5V8.9zm8.5 10.9v-7.4l7-3.5v7.4l-7 3.5zm.5-9.1h1v1h-1zm0 1.5h1v1h-1zm1.5-1.5h1v1h-1zm0 1.5h1v1h-1z"/></svg>`)
    },
    {
      name: 'RESTful APIs', category: 'Backend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#512bd4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/></svg>`)
    },
    {
      name: 'JWT Authentication', category: 'Backend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#d63aff"><path d="M12 1L3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm0 6a2.5 2.5 0 0 1 1 4.8V16h-2v-4.2A2.5 2.5 0 0 1 12 7z"/></svg>`)
    },
    {
      name: 'SQL Server', category: 'Backend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#cc2927"><path d="M12 3C7 3 3 4.8 3 7s4 4 9 4 9-1.8 9-4-4-4-9-4zm0 9c-5 0-9-1.8-9-4v3c0 2.2 4 4 9 4s9-1.8 9-4v-3c0 2.2-4 4-9 4zm0 5c-5 0-9-1.8-9-4v3c0 2.2 4 4 9 4s9-1.8 9-4v-3c0 2.2-4 4-9 4z"/></svg>`)
    },
    {
      name: 'LINQ', category: 'Backend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 36 36"><text x="2" y="26" font-size="12" font-weight="bold" font-family="monospace" fill="#512bd4">LINQ</text></svg>`)
    },
    {
      name: 'Entity Framework Core', category: 'Backend',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#512bd4" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`)
    },
    {
      name: 'Git', category: 'Tools',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#f05032"><path d="M21.7 11.3l-9-9a1 1 0 0 0-1.4 0l-2 2 2.5 2.5a1.2 1.2 0 0 1 1.5 1.5l2.4 2.4a1.2 1.2 0 1 1-.7.7L12.5 9v6.3a1.2 1.2 0 1 1-1 0V8.9a1.2 1.2 0 0 1-.6-1.6L8.4 4.8l-6.1 6.1a1 1 0 0 0 0 1.4l9 9a1 1 0 0 0 1.4 0l9-9a1 1 0 0 0 0-1.4z"/></svg>`)
    },
    {
      name: 'GitHub', category: 'Tools',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#181717"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>`)
    },
    {
      name: 'Agile Development', category: 'Tools',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#00d4ff"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 2a8 8 0 0 1 0 16A8 8 0 0 1 12 4zm-1 3v6l5 3-1 1.7-6-3.7V7h2z"/></svg>`)
    },
    {
      name: 'AI-Assisted Development', category: 'Tools',
      svg: this.svg(`<svg width="36" height="36" viewBox="0 0 24 24" fill="#7b2ff7"><path d="M12 2l1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2zm7 12l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14zM5 15l.7 1.3L7 17l-1.3.7L5 19l-.7-1.3L3 17l1.3-.7L5 15z"/></svg>`)
    },
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
