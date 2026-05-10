import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, PLATFORM_ID, signal, ViewChild, WritableSignal } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperRef') swiperRef!: ElementRef<SwiperContainer>;
  private readonly platformId = inject(PLATFORM_ID);

  categoriesList: WritableSignal<Category[]> = signal([]);

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
    this.categoriesList.set([
      { id: 1, image: '/images/categories/category-01.png', title: 'Fruits & Vegetables' },
      { id: 2, image: '/images/categories/category-02.png', title: 'Personal Care' },
      { id: 3, image: '/images/categories/category-03.png', title: 'Pantry Staples' },
      { id: 4, image: '/images/categories/category-04.png', title: 'Bakery' },
      { id: 5, image: '/images/categories/category-05.png', title: 'Beverages' },
      { id: 6, image: '/images/categories/category-06.png', title: 'Meat & Seafood' },
      { id: 7, image: '/images/categories/category-07.png', title: 'Snacks' },
      { id: 8, image: '/images/categories/category-08.png', title: 'Frozen Foods' },
      { id: 9, image: '/images/categories/category-09.png', title: 'Baby Care' },
      { id: 10, image: '/images/categories/category-10.png', title: 'Dairy & Eggs' },
    ])
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
}
