import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full/full.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    FullComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }