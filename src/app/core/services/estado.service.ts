import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, take, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient, private snackBar: SnackBarService) { }

  public getEstados(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/Estado/obtener-estados`).pipe(
      take(1),
      catchError(error => {
        const mensajeError = error?.error?.mensaje ?? 'Hubo un error desconocido durante el proceso';
        this.snackBar.openSnackBar(mensajeError, 3000)
        return of([]);
      })
    );
  }
}