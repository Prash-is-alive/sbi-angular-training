import { Component, OnInit } from '@angular/core';
import { DateHelper } from './date-helper-v2';

@Component({
  selector: 'date-example2',
  templateUrl: './date-example2.component.html',
  styleUrls: ['./date-example2.component.css']
})
export class DateExample2Component implements OnInit {

  lastLoggedIn: Date = new Date(2022, 7, 18, 23, 30);

  constructor(private dateHelper: DateHelper) { }

  ngOnInit(): void {
  }

  get lastLoggedInFromNow() {
    return this.dateHelper.fromNow(this.lastLoggedIn);
  }

  get dayOfTheWeek() {
    return this.lastLoggedIn.toLocaleDateString(undefined, { weekday : 'long' })
  }
}
