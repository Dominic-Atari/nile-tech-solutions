import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Line Tech Solutions — A straight line from problem to product',
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team').then((m) => m.Team),
    title: 'Team — Line Tech Solutions',
  },
  {
    path: 'team/:id',
    loadComponent: () =>
      import('./pages/worker-detail/worker-detail').then((m) => m.WorkerDetail),
    title: 'Profile — Line Tech Solutions',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found — Line Tech Solutions',
  },
];
