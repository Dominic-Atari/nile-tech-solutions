import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="section container nf">
      <p class="eyebrow">Error · 404</p>
      <h1 class="nf__title">This line doesn't connect to anything.</h1>
      <p class="nf__copy">The page you're after has moved or never existed. Let's get you back on track.</p>
      <div class="nf__actions">
        <a class="btn btn--primary" routerLink="/">Back home</a>
        <a class="btn btn--ghost" routerLink="/team">Meet the team</a>
      </div>
    </section>
  `,
  styles: `
    .nf {
      padding-top: clamp(80px, 14vw, 160px);
      padding-bottom: 60px;
      max-width: 60ch;
    }
    .nf__title {
      margin-top: 16px;
      font-size: clamp(2.1rem, 5.5vw, 3.4rem);
    }
    .nf__copy {
      margin-top: 16px;
      color: var(--text-dim);
      font-size: 1.1rem;
    }
    .nf__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 32px;
    }
  `,
})
export class NotFound {}
