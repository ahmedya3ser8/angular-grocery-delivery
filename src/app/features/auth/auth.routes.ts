import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '../../layouts';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/singup/singup.component').then((c) => c.SingupComponent)
      },
      {
        path: 'signin',
        loadComponent: () => import('./pages/singin/singin.component').then((c) => c.SinginComponent)
      },
    ]
  }
];
