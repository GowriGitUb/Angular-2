import { Component, OnInit,Input, ElementRef } from '@angular/core';
import {UserService} from '../users/userServices/user.service';
import {User} from '../users/user/user';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

 public indexes: Array<User> = [];

 private users: User[] = [];

  constructor(public userServices: UserService) { }
  
  ngOnInit(): void {
    this.userServices.getUsers().subscribe(response => {      
     //console.log(response.data);
      if (response.status) {       
        this.indexes = response.data;       
      } else {

      }
    });
  }

 deleteUser(user){
  if (confirm("Are you sure you want to delete " + user.firstName + user.lastName + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.userServices.deleteUser(user.id).subscribe(response => {
        console.log(response.data);
        if(response.status){
          this.indexes = response.data;
        }else{
          alert("Could not delete user.");
        }            
       });
    }
 }
}
