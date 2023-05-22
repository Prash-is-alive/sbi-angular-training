import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent {

  customerId!: number;

  constructor(private http: HttpClient) { }

  fetch() {
    this.http.get('http://localhost:8080/customer/'+ this.customerId).subscribe(response => {
      alert(JSON.stringify(response));
    });
  }
}
