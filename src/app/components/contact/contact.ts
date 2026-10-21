import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly profile = PROFILE;

  readonly channels = [
    { icon: 'bi-envelope', label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: 'bi-telephone', label: 'Phone', value: PROFILE.phone, href: PROFILE.phoneHref },
    { icon: 'bi-linkedin', label: 'LinkedIn', value: 'Abdullrahman Abugharbia', href: PROFILE.linkedin, external: true },
    { icon: 'bi-github', label: 'GitHub', value: 'abdullrahman-abugharbia', href: PROFILE.github, external: true },
  ];
}
