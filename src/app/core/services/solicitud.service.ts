import { Injectable } from "@angular/core";
import { catchError, Observable, of, take, tap } from "rxjs";
import { Solicitud } from "../models/solicitud.model";
import { Filtro } from "../models/filtro";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environment/environment";
import { SnackBarService } from "./snack-bar.service";

@Injectable({
    providedIn: "root",
})
export class SolicitudService {
    private apiUrl = environment.apiUrl;

    constructor(private httpClient: HttpClient, private snackBar: SnackBarService) { }

    public createSolicitud(solicitud: Solicitud): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/Solicitud/crear-solicitud`, solicitud)
            .pipe(
                take(1),
                tap((data: any) => {
                    this.snackBar.openSnackBar(data.mensaje, 3000)
                    return of(true);
                }),
                catchError(error => {
                    this.snackBar.openSnackBar(error.mensaje, 3000)
                    return of(false);
                })
            );
    }

    public getSolicitudes(filtro: Filtro | null): Observable<any> {
        if (!filtro) filtro = { columna: 'Id', valor: '', numeroPagina: 0, numeroItems: 5 };
        return this.httpClient.post(`${this.apiUrl}/Solicitud/obtener-solicitudes`, filtro).pipe(
            take(1),
            catchError(error => {
                this.snackBar.openSnackBar(error.mensaje, 3000)
                return of([]);
            })
        );
    }

    public updateSolicitud(solicitud: Solicitud): Observable<any> {
        return this.httpClient.put(`${this.apiUrl}/Solicitud/actualizar-solicitud`, solicitud)
            .pipe(
                take(1),
                tap((data: any) => {
                    this.snackBar.openSnackBar(data.mensaje, 3000)
                    return of(true);
                }),
                catchError(error => {
                    this.snackBar.openSnackBar(error.mensaje, 3000)
                    return of(false);
                })
            );
    }

    public deleteSolicitud(id: number): Observable<any> {
        return this.httpClient.delete(`${this.apiUrl}/Solicitud/eliminar-solicitud`, { params: { solicitudId: id } })
            .pipe(
                take(1),
                tap((data: any) => {
                    this.snackBar.openSnackBar(data.mensaje, 3000)
                    return of(true);
                }),
                catchError(error => {
                    this.snackBar.openSnackBar(error.mensaje, 3000)
                    return of(false);
                })
            );
    }
}