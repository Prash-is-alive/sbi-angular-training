import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsExample3Service {

  //myEventEmitter = new EventEmitter<boolean>();
  //myEventEmitter = new Subject<boolean>();
  myEventEmitter = new BehaviorSubject<boolean>(false);

  constructor() { 
  }
}
