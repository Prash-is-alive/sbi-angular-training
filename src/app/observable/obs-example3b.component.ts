import { Component, OnInit } from '@angular/core';
import { ObsExample3Service } from './obs-example3.service';

@Component({
  selector: 'obs-example3b',
  templateUrl: './obs-example3b.component.html',
  styleUrls: ['./obs-example3b.component.css']
})
export class ObsExample3bComponent implements OnInit {

  activated: boolean = false;

  constructor(private service: ObsExample3Service) { }

  ngOnInit(): void {
    this.service.myEventEmitter.subscribe(didActivate => {
      this.activated = didActivate;
    })
  }
}
