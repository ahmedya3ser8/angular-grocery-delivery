import { Component } from '@angular/core';

import { AuthHeaderComponent } from "../../components/auth-header/auth-header.component";
import { SingupFormComponent } from "../../components/singup-form/singup-form.component";

@Component({
  selector: 'app-singup',
  imports: [AuthHeaderComponent, SingupFormComponent],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss',
})
export class SingupComponent {

}
