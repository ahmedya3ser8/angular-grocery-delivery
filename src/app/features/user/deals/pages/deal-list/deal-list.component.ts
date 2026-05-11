import { Component } from '@angular/core';

import { DealsBannerComponent } from "../../components/deals-banner/deals-banner.component";
import { DealsProductsComponent } from "../../components/deals-products/deals-products.component";

@Component({
  selector: 'app-deal-list',
  imports: [DealsBannerComponent, DealsProductsComponent],
  templateUrl: './deal-list.component.html',
  styleUrl: './deal-list.component.scss',
})
export class DealListComponent {

}
