import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgClass } from '@angular/common';

import { NgIcon } from "@ng-icons/core";
import { Order } from '../../models/order.interface';

@Component({
  selector: 'app-order-card',
  imports: [NgIcon, RouterLink, NgClass],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss',
})
export class OrderCardComponent {
  order = input.required<Order>();
}
