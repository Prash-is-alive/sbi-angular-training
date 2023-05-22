import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  fetchUserDetails(id: number) {
    //in a real app, we will use httpclient to call an API
    return new User('Majrul Ansari', 'majrul@gmail.com');
  }
}
