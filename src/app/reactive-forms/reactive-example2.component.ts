import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-example2',
  templateUrl: './reactive-example2.component.html',
  styleUrls: ['./reactive-example2.component.css']
})
export class ReactiveExample2Component implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { } //DI

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
      confirmPassword: [''],
      mobileNo: ['']
    }, { validators : this.passwordMatch})
  }

  get confirmPassword() {
    return this.myForm.controls['confirmPassword'];
  }

  passwordMatch(control: AbstractControl) {
    console.log("inside passwordMatch validator..");
    //const f = control.parent as FormGroup;
    const f = control as FormGroup;
    if(f != null) {
      if(f.get('password')?.value != f.get('confirmPassword')?.value)
        return { passwordMismatch : true};
    }
    return null;
  }

  register() {
    console.log(this.myForm.value);
  }
}
