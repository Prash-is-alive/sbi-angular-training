import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, SharedAddressForm } from './shared-address/shared-address.form';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addCustomerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: new SharedAddressForm(null)
    })
  }

  get address() {
    return this.addCustomerForm.get('address') as SharedAddressForm;
  }

  add() {
    console.log(this.addCustomerForm);
  }
}
