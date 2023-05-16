import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  products!: Product[];

  constructor() { }

  ngOnInit(): void {
    //rather we should have fetched the data using some REST API
    this.products = [
      new Product(111, 'iPhone 13', 70000, 'https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg'),
      new Product(222, 'Galaxy S22', 60000, 'https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UY218_.jpg'),
      new Product(333, 'Mi 11', 40000, 'https://m.media-amazon.com/images/I/71Iq9ug6OvL._AC_UY218_.jpg'),
      new Product(444, 'Oppo Reno 7', 35000, 'https://m.media-amazon.com/images/I/3124XfdLQNL._AC_UY218_.jpg'),
      new Product(111, 'Lava Agni', 17000, 'https://m.media-amazon.com/images/I/61VmVHQxxxL._AC_UY218_.jpg'),
    ]
  }

  update(product: Product) {
    console.log("parent receiving updated product info..");
    console.log(product);
  }
}

export class Product {
    constructor(public id: number,public name: string, public price: number, public imgUrl: string) {
    }
}
