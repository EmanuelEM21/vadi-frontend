import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { Solicitud } from "../models/solicitud.model";
import { Filtro } from "../models/filtro";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: "root",
})
export class SolicitudService {
    private apiUrl = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }

    public createSolicitud(solicitud: Solicitud): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/Solicitud/crear-solicitud`, solicitud).pipe(take(1));
    }

    public getSolicitudes(filtro?: Filtro): Observable<any> {
        if (!filtro) filtro = { columna: 'Id', valor: '', numeroPagina: 0, numeroItems: 5 };
        return this.httpClient.post(`${this.apiUrl}/Solicitud/obtener-solicitudes`, filtro).pipe(take(1));
    }

    public updateSolicitud(solicitud: Solicitud): Observable<any> {
        return this.httpClient.put(`${this.apiUrl}/Solicitud/actualizar-solicitud`, solicitud).pipe(take(1));
    }

    public deleteSolicitud(id: number): Observable<any> {
        return this.httpClient.delete(`${this.apiUrl}/Solicitud/eliminar-solicitud`, { params: { solicitudId: id } }).pipe(take(1));
    }
}