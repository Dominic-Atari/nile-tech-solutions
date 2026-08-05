import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamService } from '../../core/team.service';
import { ProjectsService } from '../../core/projects.service';

interface Capability {
  title: string;
  copy: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly team = inject(TeamService).workers;
  protected readonly projects = inject(ProjectsService).projects;

  protected readonly capabilities: Capability[] = [
    {
      title: 'Product engineering',
      copy: 'From an empty repo to the thing your users open every day — front to back, built by the same people who designed it.',
    },
    {
      title: 'Platform & data',
      copy: 'The systems underneath: schemas, pipelines, and services built to stay standing when the load actually arrives.',
    },
    {
      title: 'Design systems',
      copy: 'Interfaces and component libraries that stay consistent as the product grows. We treat a design system like an API.',
    },
    {
      title: 'Rescue & refactor',
      copy: "Inherited a codebase that fights you? We straighten it out without stopping the ship you've already launched.",
    },
  ];
}
