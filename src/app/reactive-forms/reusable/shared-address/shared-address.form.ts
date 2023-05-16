import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class SharedAddressForm extends FormGroup {

    constructor(address: Address | null) {
        super({
            city: new FormControl(address?.city),
            pincode: new FormControl(address?.pincode)
        })
    }
}

export class Address {

    city!: string;
    pincode!: number;
}