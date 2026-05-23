import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, SidebarComponent } from "../../shared/components";

@Component({
  selector: 'app-admin-layout',
  imports: [HeaderComponent, RouterOutlet, SidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {

}
