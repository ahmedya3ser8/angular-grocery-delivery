import { Component } from '@angular/core';

import { AuthHeaderComponent } from "../../components/auth-header/auth-header.component";
import { SinginFormComponent } from "../../components/singin-form/singin-form.component";

@Component({
  selector: 'app-singin',
  imports: [AuthHeaderComponent, SinginFormComponent],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.scss',
})
export class SinginComponent {

}
