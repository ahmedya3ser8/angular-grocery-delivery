import { Routes } from '@angular/router';

import { UserLayoutComponent } from '../../layouts';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./home/pages/home/home.component').then((c) => c.HomeComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./products/pages/product-list/product-list.component').then((c) => c.ProductListComponent)
      },
      {
        path: 'products/:id',
        loadComponent: () => import('./products/pages/product-details/product-details.component').then((c) => c.ProductDetailsComponent)
      },
      {
        path: 'deals',
        loadComponent: () => import('./deals/pages/deal-list/deal-list.component').then((c) => c.DealListComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/pages/order-list/order-list.component').then((c) => c.OrderListComponent)
      },
      {
        path: 'orders/:id',
        loadComponent: () => import('./orders/pages/order-details/order-details.component').then((c) => c.OrderDetailsComponent)
      },
      {
        path: 'checkout',
        loadComponent: () => import('./checkout/pages/checkout/checkout.component').then((c) => c.CheckoutComponent)
      },
      {
        path: 'addresses',
        loadComponent: () => import('./addresses/pages/address-list/address-list.component').then((c) => c.AddressListComponent)
      },
    ]
  }
];
