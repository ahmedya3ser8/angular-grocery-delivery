import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { Product } from '../../../products/models/product';
import { ProductCardComponent } from "../../../../../shared/components";

@Component({
  selector: 'app-deals-list',
  imports: [ProductCardComponent],
  templateUrl: './deals-list.component.html',
  styleUrl: './deals-list.component.scss',
})
export class DealsListComponent implements OnInit {
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
        oldPrice: 50.0
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
        oldPrice: 450.0
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
        oldPrice: 40.0
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
        oldPrice: 150.0
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
        oldPrice: 35.0
      },
      {
        id: 6,
        discount: '9% OFF',
        image: '/images/products/product-06.png',
        title: 'Maggi Noodles 280g',
        ratingAvg: 4.5,
        review: 12,
        price: 50.0,
        unit: '/280g',
        oldPrice: 55.0
      },
      {
        id: 7,
        discount: '20% OFF',
        image: '/images/products/product-07.png',
        title: 'Sprite 1.5L',
        ratingAvg: 4.5,
        review: 12,
        price: 60.0,
        unit: '/1.5L',
        oldPrice: 75.0
      },
      {
        id: 8,
        discount: '12% OFF',
        image: '/images/products/product-08.png',
        title: 'Carrot 500g',
        ratingAvg: 4.5,
        review: 12,
        price: 44.0,
        unit: '/500g',
        oldPrice: 50.0
      },
      {
        id: 9,
        discount: '6% OFF',
        image: '/images/products/product-09.png',
        title: 'Coca-Cola 1.5L',
        ratingAvg: 4.5,
        review: 12,
        price: 75.0,
        unit: '/1.5L',
        oldPrice: 80.0
      },
      {
        id: 10,
        discount: '8% OFF',
        image: '/images/products/product-10.png',
        title: 'Brown Rice 1kg',
        ratingAvg: 4.5,
        review: 12,
        price: 110.0,
        unit: '/1kg',
        oldPrice: 120.0
      },
    ])
  }
}
