import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NgIcon } from "@ng-icons/core";

@Component({
  selector: 'app-sidebar',
  imports: [NgIcon, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

}
