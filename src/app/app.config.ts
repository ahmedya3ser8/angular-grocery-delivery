import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { provideIcons } from '@ng-icons/core';
import {
  lucideBike, lucideSearch, lucideShoppingCart, lucideLeaf,
  lucideArrowRight, lucideTruck, lucideClock, lucideShieldCheck,
  lucideStar, lucidePlus, lucideMail, lucideFacebook,
  lucideX, lucideInstagram, lucideMapPin, lucidePhone,
  lucideZap, lucideHouse, lucideArrowLeft, lucideMinus,
  lucideShoppingBag, lucideTrash2, lucideChevronDown,
  lucidePackage, lucideShield, lucideLogOut
} from '@ng-icons/lucide';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
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
      lucidePackage, lucideShield, lucideLogOut
    })
  ]
};
