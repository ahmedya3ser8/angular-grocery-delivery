import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { ProgressSpinnerModule } from 'primeng/progressspinner';
// import { AuthService } from './features/auth/services/auth.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      afterNextRender(() => {
        this.hideInitialLoader();
      });
    }
  }

  private hideInitialLoader(): void {
    requestAnimationFrame(() => {
      const loader = document.getElementById('initial-loader');
      const body = document.body;
      if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => {
          loader.remove();
          body.classList.remove('loader-active');
        }, 300);
      }
    });
  }
}
