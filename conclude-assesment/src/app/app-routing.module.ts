import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { WebFormComponent } from './components/web-form/web-form.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', component: WebFormComponent, canActivate: [AuthGuard]},
  { path: 'webform', component: WebFormComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersViewComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
