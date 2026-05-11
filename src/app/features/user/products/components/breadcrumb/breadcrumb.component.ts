import { Component, input } from '@angular/core';

import { NgIcon } from '@ng-icons/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  imports: [NgIcon, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  items = input<{ label: string; url?: string; }[]>();
}
