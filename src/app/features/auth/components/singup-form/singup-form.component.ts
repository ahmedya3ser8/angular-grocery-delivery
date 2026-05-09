import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from "../../../../shared/components";
import { globalValidators } from '../../../../shared/helpers';

@Component({
  selector: 'app-singup-form',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './singup-form.component.html',
  styleUrl: './singup-form.component.scss',
})
export class SingupFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', globalValidators.required],
      email: ['', globalValidators.email],
      password: ['', globalValidators.password]
    })
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
