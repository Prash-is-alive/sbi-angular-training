import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() product!: Product;
  @Output() updatedProduct = new EventEmitter<Product>();
  
  editable!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  editPrice() {
    this.editable = true;
  }

  updatePrice() {
    this.updatedProduct.emit(this.product);
    this.editable = false;
  }
}
