import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
