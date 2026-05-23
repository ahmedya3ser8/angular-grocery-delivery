import { Routes } from '@angular/router';

import { AdminLayoutComponent } from '../../layouts';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./products/pages/product-list/product-list.component').then((c) => c.ProductListComponent)
      },
      {
        path: 'products/add',
        loadComponent: () => import('./products/pages/product-form/product-form.component').then((c) => c.ProductFormComponent)
      },
      {
        path: 'products/edit/:id',
        loadComponent: () => import('./products/pages/product-form/product-form.component').then((c) => c.ProductFormComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/pages/order-list/order-list.component').then((c) => c.OrderListComponent)
      },
    ]
  }
];
