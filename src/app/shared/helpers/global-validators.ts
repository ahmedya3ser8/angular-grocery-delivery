import { Validators } from "@angular/forms";

export const globalValidators = {
  required: [Validators.required],
  name: [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
  email: [Validators.required, Validators.email],
  password: [Validators.required, Validators.minLength(6)]
}
