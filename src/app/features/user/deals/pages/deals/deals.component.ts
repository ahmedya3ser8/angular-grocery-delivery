import { Component } from '@angular/core';

import { DealsBannerComponent } from "../../components/deals-banner/deals-banner.component";
import { DealsListComponent } from "../../components/deals-list/deals-list.component";

@Component({
  selector: 'app-deals',
  imports: [DealsBannerComponent, DealsListComponent],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss',
})
export class DealsComponent {

}
