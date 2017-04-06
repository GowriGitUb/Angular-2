import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ControlMessagesComponent } from './control-messages.component';
import { ValidationService } from './validation.service';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import {usersRouting} from './users/users.routing';


@NgModule({
  declarations: [
    AppComponent,
    ControlMessagesComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    usersRouting,
    routing
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
