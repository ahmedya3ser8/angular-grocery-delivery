import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { InputComponent } from "../../../../shared/components";
import { globalValidators } from '../../../../shared/helpers';

import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-singup-form',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './singup-form.component.html',
  styleUrl: './singup-form.component.scss',
})
export class SingupFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly toastService = inject(ToastService);

  isLoading: WritableSignal<boolean> = signal(false);
  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', globalValidators.name],
      email: ['', globalValidators.email],
      password: ['', globalValidators.password]
    })
  }

  submitForm(): void {
    if (this.form.valid) {
      this.isLoading.set(true);
      this.authService.signup(this.form.value).subscribe({
        next: (res) => {
          if (res.success) {
            this.toastService.showToast('success', 'Success', res.message);
            this.router.navigate(['/auth/signin']);
          }
          this.isLoading.set(false);
        },
        error: (err) => {
          this.toastService.showToast('error', 'Error', err.error.message);
          this.isLoading.set(false);
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
