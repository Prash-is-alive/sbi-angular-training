import { Component, OnInit } from '@angular/core';
import { Customer } from './template-example1.component';

@Component({
  selector: 'template-example2',
  templateUrl: './template-example2.component.html',
  styleUrls: ['./template-example2.component.css']
})
export class TemplateExample2Component {

  customer: Customer2 = new Customer2();

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    this.customer.name = this.customer.name.toUpperCase();
    console.log(this.customer);
  }
}

export class Customer2 {
  name: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  mobileNumber: string = "";
}
