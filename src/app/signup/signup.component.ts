import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  // router: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: ['']
    })
  }
  signup() {
    console.log(this.signupForm.value);
    alert("Signup Successfull");
    this.signupForm.reset();
    this.router.navigate(['login']);
  } 
  }

  // get fullName(){ return this.signupForm.get('fullname'); }

