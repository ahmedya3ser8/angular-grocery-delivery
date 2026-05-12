import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { NgIcon } from '@ng-icons/core';

interface Rate {
  id: number;
  stars: number;
  count: number;
  percetage: string;
}

@Component({
  selector: 'app-review-summary',
  imports: [NgIcon],
  templateUrl: './review-summary.component.html',
  styleUrl: './review-summary.component.scss',
})
export class ReviewSummaryComponent implements OnInit {
  ratingStats: WritableSignal<Rate[]> = signal([]);

  ngOnInit(): void {
    this.ratingStats.set([
      { id: 1, stars: 5, count: 3, percetage: '100%' },
      { id: 2, stars: 4, count: 3, percetage: '100%' },
      { id: 3, stars: 3, count: 0, percetage: '0%' },
      { id: 4, stars: 2, count: 0, percetage: '0%' },
      { id: 5, stars: 1, count: 0, percetage: '0%' },
    ])
  }
}
