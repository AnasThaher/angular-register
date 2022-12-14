import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   loginState:boolean =false;
  constructor(public auths:AuthService ,public route:Router) {
    // this.loginState =auths.islogin();

    console.log(this.loginState,"this is loginstatus from navbar comp")

    console.log(auths.islogin(),"this is islogin method");
  }

  ngOnInit(): void {
   this.auths.islogin().subscribe(data=>{
      this.loginState =data;
    })
  }

  logOut(){
    console.log("this is logout method");
    localStorage.removeItem("loginUser");
    this.route.navigate(['login']);

  }
}
