import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { AuthGuard } from './auth/auth-guard.guard';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent},
  { path: 'user/add-user', component: AddUserComponent, canActivate:[AuthGuard]},
  { path: 'user/edit/:id', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'see-user', component: ShowUsersComponent, canActivate:[AuthGuard] },
  { path: 'details/:id', component: UserDetailsComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: '/see-user'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
