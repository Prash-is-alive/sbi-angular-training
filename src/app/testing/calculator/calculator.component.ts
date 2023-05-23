import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  no1!: number;
  no2!: number;
  result!: number;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.result = this.no1 - this.no2;
  }

  sub() {
    this.result = this.no1 - this.no2;
  }
}
