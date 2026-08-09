import { Component, Input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-civic-dashboard',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './civic-dashboard.html',
})
export class CivicDashboard {
  @Input() pageTitle = 'Civic dashboard';
  @Input() pageContext = 'Civic technology suite';

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
