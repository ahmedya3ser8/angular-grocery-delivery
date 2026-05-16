import { Component, ElementRef, HostListener, signal, ViewChild, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { NgIcon } from '@ng-icons/core';
import { DrawerModule } from 'primeng/drawer';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink, RouterLinkActive, DrawerModule, PopoverModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  visible: WritableSignal<boolean> = signal(false);
  isOpen: WritableSignal<boolean> = signal(false);

  @ViewChild('popoverContainer') popoverContainer!: ElementRef;

  showDrawer(): void {
    this.visible.set(true);
  }

  togglePopover(): void {
    this.isOpen.update(v => !v);
  }

  @HostListener('document:click', ['$event']) closePopover(e: Event) {
    if (this.popoverContainer && !this.popoverContainer.nativeElement.contains(e.target)) {
      this.isOpen.set(false);
    }
  }
}
