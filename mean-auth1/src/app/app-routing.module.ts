import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { CommonAuthGuard } from './shared/common-auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'auth',
    component:AuthenticationComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[CommonAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
