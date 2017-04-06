import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/loginService/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[LoginService]
})
export class DashboardComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

userLogoutService(){
  this.loginService.userLogout();  
}
}
