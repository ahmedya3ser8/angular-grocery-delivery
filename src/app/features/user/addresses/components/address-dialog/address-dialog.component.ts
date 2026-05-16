import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { InputComponent } from "../../../../../shared/components";
import { Address } from '../../models/address.interface';

@Component({
  selector: 'app-address-dialog',
  imports: [ReactiveFormsModule, InputComponent, DialogModule],
  templateUrl: './address-dialog.component.html',
  styleUrl: './address-dialog.component.scss',
})
export class AddressDialogComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  visible: WritableSignal<boolean> = signal(false);
  isEditMode: WritableSignal<boolean> = signal(false);

  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      labelAddress: ['', [Validators.required]],
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      isDefault: [''],
    })
  }

  fillForm(address: Address): void {
    this.form.patchValue({
      labelAddress: address.label,
      streetAddress: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      isDefault: address.isDefault
    })
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  showDialog(address?: Address): void {
    this.visible.set(true);
    if (this.isEditMode()) {
      this.fillForm(address!);
    }
  }

  closeDialog(): void {
    this.visible.set(false);
    this.isEditMode.set(false);
    this.form.reset({ isDefault: false });
  }
}
