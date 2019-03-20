import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class MaterialModule { }
