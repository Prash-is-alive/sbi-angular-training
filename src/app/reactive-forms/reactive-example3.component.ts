import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-example3',
  templateUrl: './reactive-example3.component.html',
  styleUrls: ['./reactive-example3.component.css']
})
export class ReactiveExample3Component implements OnInit {

  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      contactPersonName: [''],
      mobileNumber: [''],
      passengers: this.fb.array([])   
    })
  }

  addPassenger() {
    let passengerForm: FormGroup = this.fb.group({
      name: [''],
      gender: [''],
    })
    this.passengers.push(passengerForm);
  }

  get passengers() {
    return this.bookingForm.controls['passengers'] as FormArray;
  }

  submit() {
    console.log(this.bookingForm.value);
    
  }

}