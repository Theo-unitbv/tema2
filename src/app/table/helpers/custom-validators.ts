import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
  public static yearValidator(year: FormControl): ValidationErrors | null {
    if (!/^\d{4}$/.test(year?.value)) {
      return { isYear: true };
    }
    return null;
  }
}
