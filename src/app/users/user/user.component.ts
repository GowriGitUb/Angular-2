import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator,Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../userServices/user.service';
import {User} from '../user/user';
import {ValidationService} from '../../validation.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  hideElement: true;
  title: string;
  user: User = new User();

 constructor(
    private formBuilder: FormBuilder,
    public userService: UserService,
     private router: Router,
    private route: ActivatedRoute,) {
    this.userForm = this.formBuilder.group({
      'id': [],
      'firstName': ['', [ValidationService.firstNameRequiredValidator]],
      'lastName': ['', [ValidationService.lastNameRequiredValidator]],
      'userName': ['', [ValidationService.usernameRequiredValidator]],
      'password': ['', [ValidationService.passwordRequiredValidator]],      
      'phoneNumber': ['', [ValidationService.phoneNumberRequiredValidator]]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit User' : 'New User';

      if (!id)
        return;

      this.userService.getUser(id).subscribe(response => {
            if (response.status) {
              console.log(response.data);
              this.user = response.data;
            }else{
              alert("Failed to edit");
              this.router.navigate(['users']);
            }
          });
    });
  }

  userForm: any; 

  saveUser(form: any): void{
    if (this.userForm.dirty && this.userForm.valid) {
     console.log(this.userForm.value);  
      this.userService.saveUser(form);
    }
  } 

}
