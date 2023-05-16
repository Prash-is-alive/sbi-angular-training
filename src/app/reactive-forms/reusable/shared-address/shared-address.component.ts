import { Component, Input } from '@angular/core';
import { SharedAddressForm } from './shared-address.form';

@Component({
  selector: 'shared-address',
  templateUrl: './shared-address.component.html',
  styleUrls: ['./shared-address.component.css']
})
export class SharedAddressComponent {

  @Input() addressForm!: SharedAddressForm;
}
