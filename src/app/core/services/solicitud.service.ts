import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Solicitud } from "../models/solicitud.model";

@Injectable({
    providedIn: "root",
})
export class SolicitudService {

    public loadSolicitudes(): Observable<Solicitud[]> {
        return of([
            { id: 1, fechaSolicitud: '2025-04-01', solicitante: 'Carlos Jiménez', idEstado: 1 },
            { id: 2, fechaSolicitud: '2025-04-03', solicitante: 'Ana López', idEstado: 2 },
            { id: 3, fechaSolicitud: '2025-04-04', solicitante: 'Luis Fernández', idEstado: 3 },
            { id: 4, fechaSolicitud: '2025-04-05', solicitante: 'María Rojas', idEstado: 1 },
            { id: 5, fechaSolicitud: '2025-04-06', solicitante: 'Jorge Vargas', idEstado: 2 }
        ])
    }

}