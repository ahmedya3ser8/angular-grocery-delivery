import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from "../../../../shared/components";
import { globalValidators } from '../../../../shared/helpers';

@Component({
  selector: 'app-singin-form',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './singin-form.component.html',
  styleUrl: './singin-form.component.scss',
})
export class SinginFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: ['', globalValidators.email],
      password: ['', globalValidators.required]
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
