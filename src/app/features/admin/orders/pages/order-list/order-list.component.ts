import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { DataTableComponent } from "../../../../../shared/components";
import { Column } from '../../../../../shared/models/table.interface';
import { Order } from '../../../../user/orders/models/order.interface';

@Component({
  selector: 'app-order-list',
  imports: [DataTableComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  columns: WritableSignal<Column[]> = signal([]);
  ordersList: WritableSignal<Order[]> = signal([]);

  ngOnInit(): void {
    this.initCols();
    this.initOrders();
  }

  initOrders(): void {
    this.ordersList.set([
      {
        orderId: 'caabd0',
        date: '5/20/2026',
        total: 180.50,
        status: 'Delivered',
        user: {
          name: 'Admin',
          email: 'admin@example.com'
        }
      },
      {
        orderId: '3c8ce2',
        date: '5/20/2026',
        total: 140.00,
        status: 'Placed',
        user: {
          name: 'Admin',
          email: 'admin@example.com'
        }
      },
      {
        orderId: '30d817',
        date: '5/20/2026',
        total: 34.00,
        status: 'Confirmed',
        user: {
          name: 'Admin',
          email: 'admin@example.com'
        }
      },
    ])
  }

  initCols(): void {
    this.columns.set([
      { field: 'order-details', header: 'Order Details', isOrderDetails: true },
      { field: 'customer', header: 'Customer', isCustomer: true },
      { field: 'total', header: 'Total', isPrice: true },
      { field: 'status', header: 'Status', isStatus: true },
    ])
  }
}
