import { Directive, Input } from "@angular/core";
import { AbstractControl, NgModel, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[passwordMatch]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordMatchValidator, multi: true}]
})
export class PasswordMatchValidator implements Validator {

    @Input('passwordMatch') password!: NgModel;

    validate(confirmPassword: AbstractControl): ValidationErrors | null {
        if(confirmPassword.value != this.password.value)
            return { 'password-mismatch' : true };
        else
            return null;
    }
}

@Directive({
    selector: '[emailDomainCheck]',
    providers: [{provide: NG_VALIDATORS, useExisting: CustomEmailValidator, multi: true}]
})
export class CustomEmailValidator implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        console.log(control.value);
        if(control.value?.endsWith("gmail.com"))
            return { 'email-not-allowed' : true };
        else
            return null;
    }
}