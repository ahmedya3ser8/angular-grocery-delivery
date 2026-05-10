import { Component } from '@angular/core';

import { HeroComponent } from "../../components/hero/hero.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { OurServicesComponent } from "../../components/our-services/our-services.component";
import { PopularProductsComponent } from "../../components/popular-products/popular-products.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { SubscriptionNewsletterComponent } from "../../components/subscription-newsletter/subscription-newsletter.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CategoriesComponent, OurServicesComponent, PopularProductsComponent, BannerComponent, SubscriptionNewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
