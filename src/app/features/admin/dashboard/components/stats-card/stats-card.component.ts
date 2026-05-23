import { Component, input } from '@angular/core';

import { NgIcon } from "@ng-icons/core";

@Component({
  selector: 'app-stats-card',
  imports: [NgIcon],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss',
})
export class StatsCardComponent {
  icon = input.required<string>();
  title = input.required<string>();
  value = input.required<number>();
}
