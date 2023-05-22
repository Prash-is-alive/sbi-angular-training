import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input()
  something!: string;

  load: boolean = false;

  constructor() { 
    console.log("LifecycleComponent's constructor called..");
  }

  ngOnDestroy(): void {
    console.log("LifecycleComponent's ngOnDestroy method called..");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("LifecycleComponent's ngOnChanges method called..");
  }

  ngDoCheck(): void {
    console.log("LifecycleComponent's ngDoCheck method called..");
  }

  ngAfterContentInit(): void {
    console.log("LifecycleComponent's ngAfterContentInit method called..");
  }

  ngAfterContentChecked(): void {
    console.log("LifecycleComponent's ngAfterContentChecked method called..");
  }

  ngAfterViewInit(): void {
    console.log("LifecycleComponent's ngAfterViewInit method called..");
  }

  ngAfterViewChecked(): void {
    console.log("LifecycleComponent's ngAfterViewChecked method called..");
  }

  ngOnInit(): void {
    console.log("LifecycleComponent's ngOnInit method called..");
  }

  submit(): void {
    console.log("LifecycleComponent submitted..")
  }
}
