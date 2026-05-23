import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { DataTableComponent } from "../../../../../shared/components";
import { StatsCardComponent } from "../../components/stats-card/stats-card.component";

import { RecentOrder, Stats } from '../../models/dashboard.interface';
import { Column } from '../../../../../shared/models/table.interface';

@Component({
  selector: 'app-dashboard',
  imports: [StatsCardComponent, DataTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  recentOrdersList: WritableSignal<RecentOrder[]> = signal([]);

  dashboardStatsList: WritableSignal<Stats[]> = signal([]);

  columns: WritableSignal<Column[]> = signal([]);

  ngOnInit(): void {
    this.initDashboardStats();
    this.initRecentOrders();
    this.initCols();
  }

  initCols(): void {
    this.columns.set([
      { field: 'orderId', header: 'Order ID', isOrderId: true },
      { field: 'user', header: 'Customer', isCustomer: true },
      { field: 'items', header: 'Items', isItems: true },
      { field: 'total', header: 'Total', isPrice: true },
      { field: 'status', header: 'Status', isStatus: true },
      { field: 'date', header: 'Date', isDate: true }
    ])
  }

  initRecentOrders(): void {
    this.recentOrdersList.set([
      {
        orderId: 'D67DAC',
        date: new Date(),
        status: 'Delivered',
        items: 2,
        total: 248.40,
        user: {
          name: 'Admin',
          email: 'admin@example.com'
        }
      },
      {
        orderId: 'W68DOY',
        date: new Date(),
        status: 'Confirmed',
        items: 2,
        total: 248.40,
        user: {
          name: 'User',
          email: 'user@example.com'
        }
      },
      {
        orderId: 'A67DLK',
        date: new Date(),
        status: 'Packed',
        items: 2,
        total: 248.40,
        user: {
          name: 'User',
          email: 'user@example.com'
        }
      },
    ]);
  }

  initDashboardStats(): void {
    this.dashboardStatsList.set([
      { id: 1, title: 'Total Orders', icon: 'lucideShoppingBag', value: 1 },
      { id: 2, title: 'Total Users', icon: 'lucideUsers', value: 3 },
      { id: 3, title: 'Total Products', icon: 'lucidePackage', value: 27 },
      { id: 4, title: 'Out of Stock', icon: 'lucideTriangleAlert', value: 0 },
    ]);
  }
}
