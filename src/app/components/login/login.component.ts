import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auths:AuthService ,public router: Router) { }

  ngOnInit(): void {
  }
  login(log:any){
    let email =log.value.email;
    let password =log.value.password;
   if( this.auths.getUser(email,password)==null){
    alert("User Namer or password have error ");
   } else{
    this.router.navigate(['']);
    // this.auths.setoginstatus(true);

   }

  }
}
