import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '../../layouts';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'singup',
        pathMatch: 'full'
      },
      {
        path: 'singup',
        loadComponent: () => import('./pages/singup/singup.component').then((c) => c.SingupComponent)
      },
      {
        path: 'singin',
        loadComponent: () => import('./pages/singin/singin.component').then((c) => c.SinginComponent)
      },
    ]
  }
];
