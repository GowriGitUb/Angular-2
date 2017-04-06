import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { UsersComponent } from './users.component';
import {UserService} from '../users/userServices/user.service';
import { UserComponent } from '../users/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule 
  ],
  declarations: [
    UsersComponent,
    UserComponent
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }