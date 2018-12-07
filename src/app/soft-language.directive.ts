import { Directive } from '@angular/core';
import { Validators, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appSoftLanguage]',
  providers : [{provide : NG_VALIDATORS, useExisting: SoftLanguageDirective, multi:true}]
})
export class SoftLanguageDirective implements Validators{

  validate(control : AbstractControl) : {[key:string]: any} | null {
    const forbidden = control.value ? control.value.replace('','').includes('connard') : false;
    return forbidden ? {'softlanguage' : {value : control.value}} :  null;
  }
    constructor() { }

}
