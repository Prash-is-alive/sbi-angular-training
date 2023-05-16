import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'template-example3',
  templateUrl: './template-example3.component.html',
  styleUrls: ['./template-example3.component.css']
})
export class TemplateExample3Component {

  name!: string;
  mobileNo!: number;

  process(myForm: NgForm) {
    console.log("inside process method..");
    //if(myForm.valid)
      //send the data to some API for further processing
    console.log(myForm);
  }

  // process(myForm: HTMLFormElement) {
  //   console.dir(myForm);
  // }

  /*process(personName : NgModel) {
    console.dir(personName);
  }*/

  /*process(personName: HTMLInputElement) {
    console.log(personName);
    console.dir(personName);
    //console.log(personName.value);
    //console.log(this.name, this.mobileNo);
  }*/
}
