import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamService } from '../../core/team.service';

@Component({
  selector: 'app-team',
  imports: [RouterLink],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly team = inject(TeamService).workers;
}
