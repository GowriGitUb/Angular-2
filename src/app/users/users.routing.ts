import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserComponent } from '../users/user/user.component';

const usersRoutes: Routes = [
  { 
    path: 'users', 
    component: UsersComponent, 
    pathMatch: 'full' 
},
{
     path: 'users/new', 
     component: UserComponent
},
{ 
    path: 'users/:id',
    component: UserComponent
}
];

export const usersRouting = RouterModule.forChild(usersRoutes);
