import { Routes } from '@angular/router';

import { AdminLayoutComponent } from '../../layouts';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'delivery-partners',
        loadComponent: () => import('.//delivery-partners/pages/delivery-list/delivery-list.component').then((c) => c.DeliveryListComponent)
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
        path: 'products/:id',
        loadComponent: () => import('./products/pages/product-details/product-details.component').then((c) => c.ProductDetailsComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/pages/order-list/order-list.component').then((c) => c.OrderListComponent)
      },
    ]
  }
];
