import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { NgIcon } from '@ng-icons/core';

interface Review {
  id: number;
  avatar: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-review-list',
  imports: [NgIcon],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss',
})
export class ReviewListComponent implements OnInit {
  reviewsList: WritableSignal<Review[]> = signal([]);

  ngOnInit(): void {
    this.reviewsList.set([
      { id: 1, avatar: 'ST', name: 'Sneha T.', date: '4 Apr 2026', rating: 4, comment: 'Quality is decent but I expected it to be a bit fresher. Still a solid buy overall.' },
      { id: 2, avatar: 'AM', name: 'Ahmed M.', date: '2 Apr 2026', rating: 5, comment: 'Very fresh and tasty product. Delivery was also super fast.' },
    ])
  }
}
