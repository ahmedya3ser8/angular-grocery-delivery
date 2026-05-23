import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { DataTableComponent } from "../../../../../shared/components";
import { Column } from '../../../../../shared/models/table.interface';
import { Product } from '../../../../user/products/models/product';

@Component({
  selector: 'app-product-list',
  imports: [DataTableComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  columns: WritableSignal<Column[]> = signal([]);

  productsList: WritableSignal<Product[]> = signal([]);

  ngOnInit(): void {
    this.initCols();
    this.initProducts();
  }

  initCols(): void {
    this.columns.set([
      { field: 'product', header: 'Product', isProduct: true },
      { field: 'price', header: 'Price', isPrice: true },
      { field: 'stock', header: 'Stock', isStock: true },
      { field: 'action', header: 'Actions', isAction: true },
    ])
  }

  initProducts(): void {
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
        originalPrice: 50.0,
        stock: 35,
        category: 'pantry-staples'
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
        originalPrice: 450.0,
        stock: 55,
        category: 'pantry-staples'
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
        originalPrice: 40.0,
        stock: 0,
        category: 'pantry-staples'
      },
    ])
  }
}
