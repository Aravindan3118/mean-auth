import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AuthenticationComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent
  ],
  providers: []
})
export class AuthenticationModule { }
