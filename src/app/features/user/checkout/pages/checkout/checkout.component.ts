import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgIcon } from "@ng-icons/core";
import { Address } from '../../../addresses/models/address.interface';

interface Tab {
  id: number;
  name: string;
  icon: string;
  isArrow: boolean;
}

@Component({
  selector: 'app-checkout',
  imports: [NgIcon, RouterLink, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  tabsList: WritableSignal<Tab[]> = signal([]);
  addressessList: WritableSignal<Address[]> = signal([]);

  selectedTab: WritableSignal<string> = signal('Address');
  selectedAddress: WritableSignal<string> = signal('home');

  selectedPayment: string = 'card';

  ngOnInit(): void {
    this.tabsList.set([
      { id: 1, name: 'Address', icon: 'lucideMapPin', isArrow: true },
      { id: 1, name: 'Payment', icon: 'lucideCreditCard', isArrow: true },
      { id: 1, name: 'Review', icon: 'lucideCheck', isArrow: false }
    ]);
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

  onTabChange(tab: string): void {
    this.selectedTab.set(tab);
  }

  onAddressChange(label: string): void {
    this.selectedAddress.set(label);
  }
}
