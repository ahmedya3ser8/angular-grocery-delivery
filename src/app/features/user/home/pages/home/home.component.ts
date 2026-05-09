import { Component } from '@angular/core';

import { HeroComponent } from "../../components/hero/hero.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { OurServicesComponent } from "../../components/our-services/our-services.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CategoriesComponent, OurServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
