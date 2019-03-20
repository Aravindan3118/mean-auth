import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './shared/common.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './helper/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [CommonService],
  entryComponents:[ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
