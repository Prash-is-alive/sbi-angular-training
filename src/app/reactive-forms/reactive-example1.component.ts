import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-example1',
  templateUrl: './reactive-example1.component.html',
  styleUrls: ['./reactive-example1.component.css']
})
export class ReactiveExample1Component {

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]),
    confirmPassword: new FormControl('', [this.passwordMatch]),
    mobileNumber: new FormControl('', []),
  })

  get controls() {
    return this.myForm.controls;
  }

  get password() {
    return this.myForm.controls['password'];
  }

  get confirmPassword() {
    return this.myForm.controls['confirmPassword'];
  }

  passwordMatch(control: AbstractControl) {
    const f = control.parent as FormGroup;
    if(f != null) {
      if(f.get('password')?.value != f.get('confirmPassword')?.value)
        return { passwordMismatch : true };
    }
    return null;
  }


  register() {
    console.log(this.myForm.value);
    console.log(this.myForm.value.name);
  }
}
