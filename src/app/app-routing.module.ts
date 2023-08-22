import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { AuthGuard } from './auth/auth-guard.guard';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent},
  { path: 'add-user', component: AddUserComponent, canActivate:[AuthGuard]},
  { path: 'see-user', component: ShowUsersComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: '/'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
