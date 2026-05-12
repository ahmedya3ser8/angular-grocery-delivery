import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIcon } from "@ng-icons/core";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { RelatedProductsComponent } from "../../components/related-products/related-products.component";
import { ProductReviewsComponent } from "../../components/product-reviews/product-reviews.component";
import { ProductInfoComponent } from "../../components/product-info/product-info.component";

@Component({
  selector: 'app-product-details',
  imports: [BreadcrumbComponent, NgIcon, RouterLink, RelatedProductsComponent, ProductReviewsComponent, ProductInfoComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  breadcrumbs: WritableSignal<{ label: string; url?: string; }[]> = signal([]);

  ngOnInit(): void {
    this.breadcrumbs.set([
      { label: 'Products', url: '/products' },
      { label: 'Bakery', url: '/products' },
      { label: 'Butter Croissant 100g' }
    ]);
  }
}
