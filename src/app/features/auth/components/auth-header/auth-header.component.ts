import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-auth-header',
  imports: [NgIcon,RouterLink],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss',
})
export class AuthHeaderComponent {
  description = input.required<string>();
  subText = input.required<string>();
  linkText = input.required<string>();
  link = input.required<string>();
}
