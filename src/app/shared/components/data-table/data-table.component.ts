import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIcon } from '@ng-icons/core';
import { TableModule } from 'primeng/table';
import { Column } from '../../models/table.interface';

@Component({
  selector: 'app-data-table',
  imports: [NgIcon, RouterLink, DatePipe, TableModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent<T> {
  title = input.required<string>();
  showLink = input<boolean>(false);
  showButton = input<boolean>(false);
  linkText  = input<string>();
  buttonText  = input<string>();
  link = input<string>();
  icon = input<string>();

  columns = input.required<Column[]>();
  data = input.required<T[]>();
}
