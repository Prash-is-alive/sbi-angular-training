import { Component, OnInit } from '@angular/core';
import { DateHelper } from './date-helper-v2';

@Component({
  selector: 'date-example1',
  templateUrl: './date-example1.component.html',
  styleUrls: ['./date-example1.component.css']
})
export class DateExample1Component implements OnInit {

  showOrders: boolean = false;
  cancellationTriggered: boolean = false;
  cancellationMapping!: { orderId: number, cancel: boolean };

  orders: Order[] = [
    new Order(123, 5000, new Date(2022, 7, 18, 17, 30), "Confirmed"),
    new Order(456, 6000, new Date(2022, 7, 15, 11, 30), "Confirmed"),
    new Order(789, 7000, new Date(2022, 7, 16, 21, 30), "Confirmed"),
  ];

  constructor(private dateHelper: DateHelper) { }

  processCancellation(orderId: number) {
    this.cancellationTriggered = true;

    let order: Order = this.orders.find(order => order.orderId == orderId)!;
    
    let orderDate: Date = order.date;
    let currentDate: Date = new Date();

    //let's say the business logic is:
    //Orders can only be cancelled within 48 hours
    let diff: number = this.dateHelper.diff("hour", orderDate, currentDate);
    if(diff <= 48)
      order.status = "Cancelled";
  }

  ngOnInit(): void {
  }

}

export class Order {

  constructor(public orderId: number, public amount: number, public date: Date, public status: string) { }
}
