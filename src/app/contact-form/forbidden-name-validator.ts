import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(name: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = name.test(control.value.to);
    
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}