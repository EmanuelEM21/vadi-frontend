import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSolicitudesComponent } from './components/lista-solicitudes/lista-solicitudes.component';
import { GestionarSolicitudesComponent } from './components/gestionar-solicitudes/gestionar-solicitudes.component';
import { RouterModule } from '@angular/router';
import { SolicitudRoutes } from './solicitud-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListaSolicitudesComponent,
    GestionarSolicitudesComponent
  ],
  imports: [
    RouterModule.forChild(SolicitudRoutes),
    CommonModule,
    SharedModule
  ]
})
export class SolicitudModule { }