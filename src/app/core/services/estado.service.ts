import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private apiUrl = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) { }

  public getEstados(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/Estado/obtener-estados`).pipe(take(1));
  }
}