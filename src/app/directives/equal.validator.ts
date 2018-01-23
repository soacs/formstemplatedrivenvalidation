import {Directive} from '@angular/core';
import {FormGroup, NG_VALIDATORS} from '@angular/forms';
/**
 * Returns `true` if all Controls in the specified ControlGroup have exactly
 * the same value. Otherwise returns `false`.
 */
function equalValidator({value}: FormGroup): {[key: string]: any} {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return valid ? null : {equal: true};
}

/**
 * Wraps existing {@link equalValidator} function into a directive,
 * so it can be used in a template to validate a form field.
 */
@Directive({
  selector: '[equal]',
  providers: [{provide: NG_VALIDATORS, useValue: equalValidator, multi: true}]
})
export class EqualValidatorDirective {}
