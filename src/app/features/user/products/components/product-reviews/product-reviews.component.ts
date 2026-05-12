import { Component } from '@angular/core';

import { ReviewListComponent } from "../review-list/review-list.component";
import { ReviewSummaryComponent } from "../review-summary/review-summary.component";

@Component({
  selector: 'app-product-reviews',
  imports: [ReviewSummaryComponent, ReviewListComponent],
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.scss',
})
export class ProductReviewsComponent {

}
