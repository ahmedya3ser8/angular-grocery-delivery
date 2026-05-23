import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { NgIcon } from '@ng-icons/core';
import { ProductCardComponent } from "../../../../../shared/components";
import { Product } from '../../models/product';

@Component({
  selector: 'app-related-products',
  imports: [ProductCardComponent, NgIcon],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss',
})
export class RelatedProductsComponent implements OnInit {
  productsList: WritableSignal<Product[]> = signal([]);

  ngOnInit(): void {
    this.productsList.set([
      {
        id: 1,
        discount: '10% OFF',
        image: '/images/products/product-01.png',
        title: 'Butter Croissant 100g',
        ratingAvg: 4.5,
        review: 12,
        price: 45.0,
        unit: '/100g',
        originalPrice: 50.0
      },
      {
        id: 2,
        discount: '7% OFF',
        image: '/images/products/product-02.png',
        title: 'Organic Quinoa 500g',
        ratingAvg: 4.5,
        review: 12,
        price: 420.0,
        unit: '/500g',
        originalPrice: 450.0
      },
      {
        id: 3,
        discount: '13% OFF',
        image: '/images/products/product-03.png',
        title: 'Brown Bread 400g',
        ratingAvg: 4.5,
        review: 12,
        price: 35.0,
        unit: '/400g',
        originalPrice: 40.0
      },
      {
        id: 4,
        discount: '7% OFF',
        image: '/images/products/product-04.png',
        title: 'Barley 1kg',
        ratingAvg: 4.5,
        review: 12,
        price: 140.0,
        unit: '/1kg',
        originalPrice: 150.0
      },
      {
        id: 5,
        discount: '14% OFF',
        image: '/images/products/product-05.png',
        title: 'Knorr Cup Soup 70g',
        ratingAvg: 4.5,
        review: 12,
        price: 30.0,
        unit: '/70g',
        originalPrice: 35.0
      }
    ]);
  }
}
