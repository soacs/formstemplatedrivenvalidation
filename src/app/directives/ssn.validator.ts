import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

/**
 * Returns `true` if FormControl's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: FormControl): { [key: string]: any } {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

/**
 * Wraps existing ssnValidator function into a directive,
 * so it can be used in a template to validate a form field.
 */
@Directive({
  selector: '[ssn]',
  providers: [{provide: NG_VALIDATORS, useValue: ssnValidator, multi: true}]
})
export class SsnValidatorDirective {
}
