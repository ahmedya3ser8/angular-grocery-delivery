import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';

import { provideIcons } from '@ng-icons/core';
import {
  lucideArrowLeft, lucideArrowRight, lucideBike, lucideCalendar,
  lucideChartColumn, lucideCheck, lucideChevronDown, lucideChevronRight,
  lucideClock, lucideCreditCard, lucideEdit, lucideFacebook, lucideHouse, lucideInstagram,
  lucideLeaf, lucideLogOut, lucideMail, lucideMapPin, lucideMinus, lucidePackage,
  lucidePackageSearch, lucidePencil, lucidePhone, lucidePlus, lucideSearch, lucideShield,
  lucideShieldCheck, lucideShoppingBag, lucideShoppingCart, lucideStar, lucideTrash,
  lucideTrash2, lucideTriangleAlert, lucideTruck, lucideUsers, lucideX, lucideZap
} from '@ng-icons/lucide';
import { MessageService } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './features/auth/services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      }
    }),
    provideIcons({
      lucideBike, lucideSearch, lucideShoppingCart, lucideLeaf,
      lucideArrowRight, lucideTruck, lucideClock, lucideShieldCheck,
      lucideStar, lucidePlus, lucideMail, lucideFacebook,
      lucideX, lucideInstagram, lucideMapPin, lucidePhone,
      lucideZap, lucideHouse, lucideArrowLeft, lucideMinus,
      lucideShoppingBag, lucideTrash2, lucideChevronDown,
      lucidePackage, lucideShield, lucideLogOut, lucideCalendar,
      lucideChevronRight, lucideCheck, lucideTrash, lucidePencil,
      lucideCreditCard, lucideChartColumn, lucidePackageSearch,
      lucideUsers, lucideTriangleAlert, lucideEdit
    }),
    provideAppInitializer(() => {
      const auth = inject(AuthService);
      return firstValueFrom(auth.getMe())
      .catch(() => {
        auth.user.set(null)
      })
    }),
    MessageService,
  ]
};
