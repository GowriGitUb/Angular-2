import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup ,Validator ,Validators} from '@angular/forms';
import { ValidationService } from '../validation.service';
import {LoginService} from './loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  
  ngOnInit() {
  }

  loginForm: any;

  constructor(private formBuilder: FormBuilder,public loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      'userName': ['', [ValidationService.usernameRequiredValidator]],
      'password': ['', [ValidationService.passwordRequiredValidator]]
    });
  }

  login(form: any): void{
    if (this.loginForm.dirty && this.loginForm.valid) {
     //  console.log(form);
      this.loginService.login(form);
    }
  }

}
