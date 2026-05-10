import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { NgIcon } from '@ng-icons/core';
import { Service } from '../../models/our-service';

@Component({
  selector: 'app-our-services',
  imports: [NgIcon],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent implements OnInit {
  servicesList: WritableSignal<Service[]> = signal([]);

  ngOnInit(): void {
    this.servicesList.set([
      { id: 1, icon: 'lucideTruck', title: 'Free Delivery', subTitle: 'Orders over $20' },
      { id: 2, icon: 'lucideLeaf', title: '100% Organic', subTitle: 'Certified products' },
      { id: 3, icon: 'lucideClock', title: 'Same Day', subTitle: 'Express delivery' },
      { id: 4, icon: 'lucideShieldCheck', title: 'Secure Pay', subTitle: 'Safe checkout' }
    ])
  }
}
