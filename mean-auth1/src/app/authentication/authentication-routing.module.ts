import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  {
    path: 'auth',
    component : AuthenticationComponent,
    children: [
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
