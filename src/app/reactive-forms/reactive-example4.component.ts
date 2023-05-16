import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-example4',
  templateUrl: './reactive-example4.component.html',
  styleUrls: ['./reactive-example4.component.css']
})
export class ReactiveExample4Component {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  });

  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Raj',
      //lastName: 'Chauhan',
      address: {
        street: '404, Not Found Street, Internal Server City',
        //city: 'Delhi',
        //state: 'DL',
        //zip: '400001'
      },
      //hobbies: []
    });
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
 
}