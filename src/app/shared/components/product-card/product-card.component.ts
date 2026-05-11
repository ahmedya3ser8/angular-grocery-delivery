import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIcon } from '@ng-icons/core';
import { Product } from '../../../features/user/products/models/product';

@Component({
  selector: 'app-product-card',
  imports: [NgIcon, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
}
