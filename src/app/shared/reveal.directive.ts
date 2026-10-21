import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

// Fades an element up once it scrolls into view. Motion is disabled in CSS
// for users who prefer reduced motion.
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class Reveal implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit() {
    const node = this.el.nativeElement;
    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          node.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      // A fixed margin rather than a ratio, so tall blocks on mobile don't reveal late.
      { rootMargin: '0px 0px -60px 0px', threshold: 0 },
    );
    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
