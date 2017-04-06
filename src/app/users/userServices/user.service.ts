import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {User} from '../user/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private editUrl: string = "http://192.168.1.158:8087/ISISApp/restAPI/getUser";

  private deleteUrl: string = "http://192.168.1.158:8087/ISISApp/restAPI/deleteUser";

  constructor(public http: Http, private router: Router) { }

user: Observable<User[]>;

/*
Purpose : To list the users from DB
*/
getUsers(){
  console.log("Users service");
let headers = new Headers();
headers.append('Content-type','application/json');
let options = new RequestOptions({headers:headers});
return this.http.get("http://192.168.1.158:8087/ISISApp/restAPI/listUsers",options)
.map((response) => response.json());
  }

/*
Purpose : To add and update user
*/

 saveUser(userForm) {
    console.log('User Add Service ')
    let id = userForm.id;     
    let firstName = userForm.firstName;   
    let lastName = userForm.lastName;
    let userName = userForm.userName;
    let password = userForm.password;  
    let phoneNumber = userForm.phoneNumber;
    
    let _body = JSON.stringify({ id,firstName, lastName, userName, password, phoneNumber });

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://192.168.1.158:8087/ISISApp/restAPI/saveUser', _body, { headers: headers })
    .subscribe(response => {
      if (response.json().status) {
         this.router.navigate(['users']);
      } else {

      }
    });
  }  
  
  getUser(id){
    return this.http.get(this.getUserUpdateUrl(id)).map(res => res.json());
  }

  deleteUser(id){
   return this.http.get(this.getUserDeleteUrl(id)).map(res => res.json());
  }

  private getUserUpdateUrl(id){   
    return this.editUrl + "/" + id;
  }

 private getUserDeleteUrl(id){
    return this.deleteUrl + "/" + id;
  }
 
}
