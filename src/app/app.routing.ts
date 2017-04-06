import {ModuleWithProviders, Component} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';


export const routs: Routes = [
    { 
        path: '', 
        component: LoginComponent 
    },{
        path: 'login',
        component: LoginComponent
    },
    { 
        path: 'dashboard',
        component: DashboardComponent
    },
   /* {
        path: 'users',
        component: UsersComponent,        
    },{
        path: 'user',
        component: UserComponent
    }
    ,*/
    /*{
        path: 'users',
        children: [
            {
                path: '',
                component: UsersComponent
            },
            {
                path: 'new',
                component: UserComponent
            }            
        ]

    },*/
    {
        path: 'logout',
        redirectTo: '/login',
        pathMatch: 'full'
    }   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routs);

