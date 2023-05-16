import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'obs-example1',
  templateUrl: './obs-example1.component.html',
  styleUrls: ['./obs-example1.component.css']
})
export class ObsExample1Component {

  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(next => {
      console.log(next);
    });
    /*interval(1000).subscribe(next => {
      console.log(next);
    })*/
    //let o: Observable<number> = interval(1000);
    //let subscription: Subscription = o.subscribe(this.observer);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  observer(next: number) {
    console.log(next);
  }

  
}
