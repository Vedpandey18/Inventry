import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  email: string | undefined;
  password: string | undefined;
  constructor(private formBuilder : FormBuilder,  private router:Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login() : void {
      if(this.email == 'admin' && this.password == 'admin'){
       this.router.navigate(["user"]);
      }else {
        alert("Invalid credentials");
      }
    }

}


