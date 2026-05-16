import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIcon } from "@ng-icons/core";
import { DeliveryAddressComponent } from "../../components/delivery-address/delivery-address.component";
import { DeliverySummaryComponent } from "../../components/delivery-summary/delivery-summary.component";
import { DeliveryProgressComponent } from "../../components/delivery-progress/delivery-progress.component";
import { DeliveryMapComponent } from "../../components/delivery-map/delivery-map.component";

@Component({
  selector: 'app-order-details',
  imports: [NgIcon, RouterLink, DeliveryAddressComponent, DeliverySummaryComponent, DeliveryProgressComponent, DeliveryMapComponent],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent {

}
