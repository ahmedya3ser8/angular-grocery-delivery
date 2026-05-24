import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild,
  WritableSignal
} from '@angular/core';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { SkeletonModule } from 'primeng/skeleton';

import { Category } from '../../models/category.interface';
import { CategoryService } from '../../services/category.service';
import { ToastService } from '../../../../../core/services/toast.service';

@Component({
  selector: 'app-categories',
  imports: [SkeletonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperRef') swiperRef!: ElementRef<SwiperContainer>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly categoryService = inject(CategoryService);
  private readonly toastService = inject(ToastService);

  categoriesList: WritableSignal<Category[]> = signal([]);
  isLoading: WritableSignal<boolean> = signal(false);

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    speed: 600,
    autoplay: { delay: 2000, pauseOnMouseEnter: true },
    breakpoints: {
      640:  { slidesPerView: 2 },
      768:  { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
      1280: { slidesPerView: 7 },
      1536: { slidesPerView: 9 },
    }
  }

  ngOnInit(): void {
    this.getCategories();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
    }
  }

  initSwiper(): void {
    const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, this.swiperConfig);
    swiperEl.initialize();
  }

  getCategories(): void {
    this.isLoading.set(true);
    this.categoryService.getCategories().subscribe({
      next: (res) => {
        if (res.success) {
          this.categoriesList.set(res.data);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.log(err);
        console.log(this.toastService.showToast('error', 'Error', err.error.message));
        this.isLoading.set(false);
      }
    })
  }
}
