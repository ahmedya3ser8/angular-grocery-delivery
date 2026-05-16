import { Component, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';

import { NgIcon } from "@ng-icons/core";
import { AddressCardComponent } from "../../components/address-card/address-card.component";
import { AddressDialogComponent } from "../../components/address-dialog/address-dialog.component";
import { Address } from '../../models/address.interface';

@Component({
  selector: 'app-address-list',
  imports: [NgIcon, AddressCardComponent, AddressDialogComponent],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.scss',
})
export class AddressListComponent implements OnInit {
  @ViewChild(AddressDialogComponent) addressDialog!: AddressDialogComponent;
  addressessList: WritableSignal<Address[]> = signal([]);

  ngOnInit(): void {
    this.addressessList.set([
      {
        id: 1,
        label: 'home',
        street: '13 street sansob',
        city: 'mansoura',
        state: 'egypt',
        zipCode: '45165',
        isDefault: true
      },
      {
        id: 2,
        label: 'work',
        street: '25 nile street',
        city: 'cairo',
        state: 'egypt',
        zipCode: '11511',
        isDefault: false
      },
    ])
  }

  showDialog(): void {
    this.addressDialog.showDialog();
  }

  editAddress(address: Address): void {
    console.log('address', address);
    this.addressDialog.isEditMode.set(true);
    this.addressDialog.showDialog(address);
  }
}
