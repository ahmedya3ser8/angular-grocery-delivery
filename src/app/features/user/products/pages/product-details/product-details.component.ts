import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIcon } from "@ng-icons/core";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-product-details',
  imports: [BreadcrumbComponent, NgIcon, RouterLink],
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
    ])
  }
}
