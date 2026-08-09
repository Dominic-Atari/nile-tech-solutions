import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/projects.service';

@Component({
  selector: 'app-work',
  imports: [RouterLink],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  protected readonly projects = inject(ProjectsService).projects;

  /** Host + path of a URL, for the browser-chrome address bar on Work cards. */
  protected displayUrl(url: string): string {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
}
