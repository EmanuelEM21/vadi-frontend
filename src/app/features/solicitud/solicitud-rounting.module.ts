import { Routes } from "@angular/router";
import { ListaSolicitudesComponent } from "./components/lista-solicitudes/lista-solicitudes.component";
import { GestionarSolicitudesComponent } from "./components/gestionar-solicitudes/gestionar-solicitudes.component";

export const SolicitudRoutes: Routes = [
    {
        path: '',
        redirectTo: 'lista-solicitudes',
        pathMatch: 'full'
    },
    {
        path: 'lista-solicitudes',
        component: ListaSolicitudesComponent
    },
    {
        path: 'crear-solicitud',
        component: GestionarSolicitudesComponent
    },
    {
        path: 'actualizar-solicitud/:id',
        component: GestionarSolicitudesComponent
    }
];