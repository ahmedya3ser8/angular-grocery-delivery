import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { SelectModule } from 'primeng/select';
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { ProductFiltersComponent } from "../../components/product-filters/product-filters.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
  selector: 'app-products',
  imports: [SelectModule, BreadcrumbComponent, ProductFiltersComponent, ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  breadcrumbs: WritableSignal<{ label: string; url?: string; }[]> = signal([]);

  ngOnInit(): void {
    this.breadcrumbs.set([
      { label: 'All Products' }
    ])
  }
}
