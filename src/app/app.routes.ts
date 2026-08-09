import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Telesuk Solutions — Digital solutions for problems that matter',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'About — Telesuk Solutions',
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work').then((m) => m.Work),
    title: 'Work — Telesuk Solutions',
  },
  {
    path: 'public-portal',
    loadComponent: () => import('./pages/public-portal/public-portal').then((m) => m.PublicPortal),
    title: 'Public Portal — Telesuk Civic',
  },
  {
    path: 'citizen',
    loadComponent: () => import('./pages/citizen/citizen').then((m) => m.Citizen),
    title: 'Citizen Dashboard — Telesuk Civic',
  },
  {
    path: 'citisen',
    redirectTo: 'citizen',
    pathMatch: 'full',
  },
  {
    path: 'poll-station',
    loadComponent: () => import('./pages/poll-station/poll-station').then((m) => m.PollStation),
    title: 'Poll Station — Telesuk Civic',
  },
  {
    path: 'nec-command',
    loadComponent: () => import('./pages/nec-command/nec-command').then((m) => m.NecCommand),
    title: 'NEC Command Center — Telesuk Civic',
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team').then((m) => m.Team),
    title: 'Team — Telesuk Solutions',
  },
  {
    path: 'team/:id',
    loadComponent: () =>
      import('./pages/worker-detail/worker-detail').then((m) => m.WorkerDetail),
    title: 'Profile — Telesuk Solutions',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found — Telesuk Solutions',
  },
];
