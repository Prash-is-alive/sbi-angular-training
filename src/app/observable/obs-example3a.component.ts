import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObsExample3Service } from './obs-example3.service';

@Component({
  selector: 'obs-example3a',
  templateUrl: './obs-example3a.component.html',
  styleUrls: ['./obs-example3a.component.css']
})
export class ObsExample3aComponent implements OnInit {

  constructor(private router: Router, private service: ObsExample3Service) { }

  ngOnInit(): void {

  }

  activate() {
    this.service.myEventEmitter.next(true);
    //this.router.navigate(['obs-3b']);
  }

}
