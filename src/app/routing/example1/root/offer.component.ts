import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit, OnDestroy {

  @Input() product!: string;

  constructor() {
    console.log(this.constructor.name + " constructor invoked..");
  }

  ngOnInit(): void {
    console.log(this.constructor.name + " noOnInit invoked..")
  }

  ngOnDestroy(): void {
    console.log(this.constructor.name + " ngOnDestroy invoked..")
  }

}
