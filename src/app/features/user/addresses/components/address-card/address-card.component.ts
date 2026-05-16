import { Component, input, output } from '@angular/core';

import { NgIcon } from "@ng-icons/core";
import { Address } from '../../models/address.interface';

@Component({
  selector: 'app-address-card',
  imports: [NgIcon],
  templateUrl: './address-card.component.html',
  styleUrl: './address-card.component.scss',
})
export class AddressCardComponent {
  address = input.required<Address>();

  edit = output<Address>();

  editAddress(address: Address): void {
    this.edit.emit(address);
  }

  deleteAddress(addressId: number): void {
    console.log(addressId);
  }
}
