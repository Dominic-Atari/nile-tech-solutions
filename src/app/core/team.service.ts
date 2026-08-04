import { Injectable, signal } from '@angular/core';
import { Worker } from './models/worker';
import { TEAM } from './team.data';

/**
 * In-memory access to the team. No HTTP, no backend — the data ships with the app.
 * Exposed as a signal so components stay reactive in this zoneless app.
 */
@Injectable({ providedIn: 'root' })
export class TeamService {
  private readonly _workers = signal<readonly Worker[]>(TEAM);

  /** All team members. */
  readonly workers = this._workers.asReadonly();

  /** Look up a member by their URL slug. */
  byId(id: string): Worker | undefined {
    return this._workers().find((w) => w.id === id);
  }
}
