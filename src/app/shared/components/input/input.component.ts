import { Component, forwardRef, input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  id = input.required<string>();
  label = input.required<string>();
  placeholder = input.required<string>();

  type = input<string>('text');
  errors = input<{[key: string]: string}>({});
  control = input<AbstractControl | null>(null);

  value!: string;

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  get objectKeys() {
    return Object.keys(this.errors());
  }
}
