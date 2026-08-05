import { Injectable, signal } from '@angular/core';
import { Project } from './models/project';
import { PROJECTS } from './projects.data';

/**
 * In-memory access to shipped work. No HTTP, no backend — the data ships with
 * the app. Exposed as a signal so components stay reactive in this zoneless app.
 */
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly _projects = signal<readonly Project[]>(PROJECTS);

  /** All shipped projects. */
  readonly projects = this._projects.asReadonly();
}
