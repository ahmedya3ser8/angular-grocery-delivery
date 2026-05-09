import { Validators } from "@angular/forms";

export const globalValidators = {
  required: [Validators.required],
  email: [Validators.required, Validators.email],
  password: [Validators.required, Validators.pattern(/^[A-Z][a-z0-9@#$]{7,}$/)]
}
