import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'obs-example2',
  templateUrl: './obs-example2.component.html',
  styleUrls: ['./obs-example2.component.css']
})
export class ObsExample2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //const customIntervalObservable = Observable.create((observer: { next: (arg0: number) => void; complete: () => void; error: (arg0: Error) => void; }) => {
    const myObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count == 10)
          observer.complete();
        /*if(count > 2)
          observer.error(new Error("Count has exceeded the limit!"));*/
        count ++;
      }, 1000);
    });

    myObservable.pipe(map(data => {
      return 'Round  ' + data;
    }))

    const mySubscriber = myObservable.pipe(filter(data => {
      return data as number %2 == 0;
    }), map(data => {
      return 'Round  ' + data;
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('completed..');
    })

    /*const mySubscriber = myObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('completed..');
    })*/

  }
}
