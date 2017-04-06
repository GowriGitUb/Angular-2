import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions } from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(public http: Http,private router:Router) { }

  loggedIn: boolean = false;
  logoutMessage: string;
  login(loginData){
    const userName = loginData.userName;
    const password = loginData.password;
    const _data = JSON.stringify({userName,password});
    let headers = new Headers();
    headers.append('Content-type','application/json');
    let options = new RequestOptions({headers:headers});
    this.http.post('http://192.168.1.158:8087/ISISApp/restAPI/login',_data,options).
    subscribe(response => {
      console.log(response.json());
      if (response.json().status) {
        console.log("responseData");
        console.log(response.json().status);
        this.saveUserId(response.json().userId);      
        this.router.navigate(['dashboard']);
      }else{
         alert("Invalid Username and Password");
         this.router.navigate(['login']);
      }
    });
  }

  saveUserId(userId){
    this.loggedIn = true;
    window.localStorage.setItem('loggedUserId',userId);
  }

  userLogout(){
    this.loggedIn = false;
    window.localStorage.clear();
    this.logoutMessage = "Logout Successfully";
    this.router.navigate(['login']);
  }
}
