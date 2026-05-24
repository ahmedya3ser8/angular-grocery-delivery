import { Component, ElementRef, HostListener, inject, signal, ViewChild, WritableSignal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

import { NgIcon } from '@ng-icons/core';
import { DrawerModule } from 'primeng/drawer';
import { PopoverModule } from 'primeng/popover';

import { User } from '../../../features/auth/models/auth.interface';
import { AuthService } from '../../../features/auth/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink, RouterLinkActive, DrawerModule, PopoverModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  visible: WritableSignal<boolean> = signal(false);
  isOpen: WritableSignal<boolean> = signal(false);

  private readonly authService = inject(AuthService);
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);

  user: WritableSignal<User | null> = this.authService.user;

  @ViewChild('popoverContainer') popoverContainer!: ElementRef;

  showDrawer(): void {
    this.visible.set(true);
  }

  togglePopover(): void {
    this.isOpen.update(v => !v);
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: (res) => {
        if (res.success) {
          this.toastService.showToast('success', 'Success', res.message);
          this.visible.set(false);
          this.router.navigate(['/auth/signin'])
        }
      },
      error: (err) => {
        this.toastService.showToast('error', 'Error', err.error.message);
      }
    })
  }

  @HostListener('document:click', ['$event']) closePopover(e: Event) {
    if (this.popoverContainer && !this.popoverContainer.nativeElement.contains(e.target)) {
      this.isOpen.set(false);
    }
  }
}
