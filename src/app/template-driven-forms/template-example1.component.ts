import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-example1',
  templateUrl: './template-example1.component.html',
  styleUrls: ['./template-example1.component.css']
})
export class TemplateExample1Component implements OnInit {

  customer: Customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.customer);
  }

  register2(myForm: NgForm) {
    console.log(myForm);
    console.log(myForm.value);
    console.log(this.customer);
    console.log(JSON.stringify(this.customer));
  }
}

export class Customer {
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  mobileNumber!: number;
  address: Address = new Address();
}

export class Address {

  city!: string;
  pincode!: number;
}
