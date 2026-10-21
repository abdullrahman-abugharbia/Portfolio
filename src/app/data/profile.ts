// Single source for personal details and links shared across sections.
export const PROFILE = {
  name: 'Abdullrahman Abugharbia',
  shortName: 'Abdullrahman',
  title: 'ASP.NET Full-Stack Web Developer',
  location: 'Zarqa, Jordan',
  email: 'abdullrahman.abugharbia@gmail.com',
  phone: '+962 78 646 2453',
  phoneHref: 'tel:+962786462453',
  linkedin: 'https://www.linkedin.com/in/abdullrahman-abugharbia-2a777235a',
  github: 'https://github.com/abdullrahman-abugharbia',
  cv: 'Abdullrahman_Abugharbia_CV.pdf',
} as const;

export interface NavLink {
  id: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
