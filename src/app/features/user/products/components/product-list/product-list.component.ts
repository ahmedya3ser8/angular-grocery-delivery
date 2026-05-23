import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductCardComponent } from "../../../../../shared/components";
import { Product } from '../../models/product';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, FormsModule, SelectModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  sortOptions: WritableSignal<{ label: string; value: string; }[]> = signal([]);
  productsList: WritableSignal<Product[]> = signal([]);

  selectedSort = signal('newest');

  ngOnInit(): void {
    this.sortOptions.set([
      { label: 'Newest', value: 'newest' },
      { label: 'Price: Low - High', value: 'price_asc' },
      { label: 'Price: High - Low', value: 'price_desc' },
      { label: 'Top Rated', value: 'rating' },
      { label: 'A - Z', value: 'name' }
    ]);

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
        originalPrice: 55.0
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
        originalPrice: 75.0
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
        originalPrice: 50.0
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
        originalPrice: 80.0
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
        originalPrice: 120.0
      },
    ])
  }
}
