import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatNativeDateModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatNativeDateModule
  ]
})
export class SharedModule { }