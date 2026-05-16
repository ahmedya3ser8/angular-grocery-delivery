import { Component, computed, OnInit, Signal, signal, WritableSignal } from '@angular/core';

import { OrderCardComponent } from "../../components/order-card/order-card.component";
import { Order } from '../../models/order.interface';
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-order-list',
  imports: [OrderCardComponent, NgIcon, RouterLink],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  ordersList: WritableSignal<Order[]> = signal([]);
  tabsList: WritableSignal<string[]> = signal([]);

  selectedTab: WritableSignal<string> = signal('All Orders');

  ngOnInit(): void {
    this.ordersList.set([
      {
        orderId: '98D67DAC',
        date: 'Apr 6, 2026',
        status: 'Delivered',
        images: ['/images/products/product-01.png', '/images/products/product-02.png'],
        items: 2,
        price: 248.40
      },
      {
        orderId: '77D65DAD',
        date: 'Apr 6, 2026',
        status: 'Out for Delivery',
        images: ['/images/products/product-03.png', '/images/products/product-04.png'],
        items: 2,
        price: 248.40
      },
      // {
      //   orderId: '50D60DPL',
      //   date: 'Apr 6, 2026',
      //   status: 'Placed',
      //   images: ['/images/products/product-05.png', '/images/products/product-06.png'],
      //   items: 2,
      //   price: 248.40
      // },
    ]);
    this.tabsList.set([ 'All Orders', 'Placed', 'Out for Delivery', 'Delivered' ])
  }

  onTabChange(tab: string): void {
    this.selectedTab.set(tab);
  }

  filterOrders: Signal<Order[]> = computed(() => {
    if (this.selectedTab() === 'All Orders') return this.ordersList();

    return this.ordersList().filter((order) => order.status === this.selectedTab());
  })
}
