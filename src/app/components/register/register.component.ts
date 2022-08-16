import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  g:string|undefined;
  gender:string[]=['Femail','Mail'];
  constructor() { }

  ngOnInit(): void {
  }
  creatUser(register:any){
    console.log(register);
    let fname =register.value.fname;
    let lname =register.value.lname;
    let age =register.value.age;
    let gender =register.value.gender;
    let email =register.value.email;
    let password =register.value.password;
    let copassword =register.value.copassword;
    let address =register.value.address;
    console.log('fname',fname,'lname',lname,'age',age,'gender',gender,'email',email,'password',password,'copassword',copassword,'address',address)
  }
}
