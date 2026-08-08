import { Component, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Navbar {
  protected readonly menuOpen = signal(false);

  private readonly doc = inject(DOCUMENT);

  constructor() {
    // Freeze the page behind the drawer so only the drawer scrolls.
    effect(() => {
      this.doc.body.classList.toggle('is-nav-open', this.menuOpen());
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
