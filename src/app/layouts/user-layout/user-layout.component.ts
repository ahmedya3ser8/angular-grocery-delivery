import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, FooterComponent } from "../../shared/components";

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
})
export class UserLayoutComponent {

}
