import {
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamService } from '../../core/team.service';

@Component({
  selector: 'app-worker-detail',
  imports: [RouterLink],
  templateUrl: './worker-detail.html',
  styleUrl: './worker-detail.scss',
})
export class WorkerDetail {
  /** Route param `:id`, bound via withComponentInputBinding(). */
  readonly id = input.required<string>();

  private readonly team = inject(TeamService);

  protected readonly worker = computed(() => this.team.byId(this.id()));
  protected readonly historyOpen = signal(false);

  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');

  constructor() {
    // Bring the timeline into view when it opens.
    effect(() => {
      const el = this.panel()?.nativeElement;
      if (this.historyOpen() && el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  protected toggleHistory(): void {
    this.historyOpen.update((open) => !open);
  }
}
