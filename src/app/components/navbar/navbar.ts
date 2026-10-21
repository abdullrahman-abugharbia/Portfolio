import { Component, DestroyRef, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../data/profile';
import { ThemeService } from '../../shared/theme.service';

const MOBILE_QUERY = '(max-width: 900px)';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly profile = PROFILE;
  readonly links = NAV_LINKS;
  readonly theme = inject(ThemeService);

  readonly isScrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly activeId = signal<string | null>(null);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      this.onScroll();

      const mobile = window.matchMedia(MOBILE_QUERY);
      const closeOnDesktop = (e: MediaQueryListEvent) => !e.matches && this.menuOpen.set(false);
      mobile.addEventListener('change', closeOnDesktop);
      destroyRef.onDestroy(() => mobile.removeEventListener('change', closeOnDesktop));
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 24);

    // Scroll spy: the active section is the last one whose top has passed
    // the upper half of the viewport (none while the hero is in view).
    const mark = window.innerHeight * 0.45;
    let active: string | null = null;
    for (const link of this.links) {
      const top = document.getElementById(link.id)?.getBoundingClientRect().top;
      if (top !== undefined && top <= mark) active = link.id;
    }
    this.activeId.set(active);
  }

  @HostListener('document:keydown.escape')
  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  // Menu links close the menu after the click so the browser can finish the
  // anchor navigation or download before the link is removed from the DOM.
  closeMenuAfterClick() {
    setTimeout(() => this.menuOpen.set(false));
  }
}
