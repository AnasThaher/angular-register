import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:User;
  constructor() {
    this.user=AuthService.user as unknown as User
  }

  ngOnInit(): void {
  }

}
