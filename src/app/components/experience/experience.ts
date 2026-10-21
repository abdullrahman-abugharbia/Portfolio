import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly education = [
    { school: 'The Hashemite University', field: 'Computer Information Systems', years: '2023 – 2026', note: 'Graduate' },
    { school: 'Mutah University', field: 'Computer Information Systems', years: '2022 – 2023' },
  ];
}
