import { Router } from '@angular/router';
import { User } from './../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  g?:string;
  gender:string[]=['Femail','Mail'];
  registerForm :FormGroup;

  constructor(public fb:FormBuilder,public auths:AuthService ,public route:Router) {
    this.registerForm = this.fb.group({
      fname:[,Validators.required  ],
      lname:[,Validators.required  ],
      email:[,Validators.required  ],
      password:[,Validators.required  ],
      addres:[,Validators.required  ],
      age:[,Validators.required  ],
      gender:[,Validators.required  ],

    })
   }

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
    const  newUser = new User(fname,lname,email,password,gender,address,age);
    this.auths.creatUser(newUser);
    this.route.navigate(["login"]);
    // console.log('fname',fname,'lname',lname,'age',age,'gender',gender,'email',email,'password',password,'copassword',copassword,'address',address)
  }
}
