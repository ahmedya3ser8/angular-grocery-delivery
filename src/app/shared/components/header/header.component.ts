import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { NgIcon } from '@ng-icons/core';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink, RouterLinkActive, DrawerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  visible: WritableSignal<boolean> = signal(false);

  showDrawer(): void {
    this.visible.set(true);
  }
}
