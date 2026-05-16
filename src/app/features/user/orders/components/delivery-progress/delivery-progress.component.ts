import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { NgIcon } from "@ng-icons/core";
import { NgClass } from '@angular/common';

interface DeliveryProgress {
  id: number;
  icon: string;
  title: string;
  date?: string;
  completed: boolean;
  active: boolean;
}

@Component({
  selector: 'app-delivery-progress',
  imports: [NgIcon, NgClass],
  templateUrl: './delivery-progress.component.html',
  styleUrl: './delivery-progress.component.scss',
})
export class DeliveryProgressComponent implements OnInit {
  deliveryStepsList: WritableSignal<DeliveryProgress[]> = signal([]);

  ngOnInit(): void {
    this.deliveryStepsList.set([
      { id: 1, icon: 'lucideClock', title: 'Placed', date: 'Apr 6, 01:23 PM', completed: true, active: false },
      { id: 1, icon: 'lucideCheck', title: 'Confirmed', completed: true, active: false },
      { id: 1, icon: 'lucideTruck', title: 'Assigned', date: 'Apr 6, 01:23 PM', completed: true, active: false },
      { id: 1, icon: 'lucidePackage', title: 'Packed', date: 'Apr 6, 01:23 PM', completed: true, active: false },
      { id: 1, icon: 'lucideTruck', title: 'Out for Delivery', date: 'Apr 6, 01:23 PM', completed: true, active: true },
      { id: 1, icon: 'lucideCheck', title: 'Delivered', completed: false, active: false },
    ])
  }
}
