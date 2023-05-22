import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user!: User;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.user = this.service.fetchUserDetails(123);
  }

}
