import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { createSolicitud, createSolicitudSuccess, deleteSolicitud, deleteSolicitudSuccess, loadSolicitudes, loadSolicitudesSuccess, updateSolicitud, updateSolicitudSuccess } from '../actions/solicitud.actions';
import { SolicitudService } from 'src/app/core/services/solicitud.service';

@Injectable()
export class SolicitudEffects {
  constructor(
    private solicitudService: SolicitudService,
    private actions$: Actions,
  ) { }

  createSolicitud$ = createEffect(() => this.actions$.pipe(
    ofType(createSolicitud),
    switchMap((data) => this.solicitudService.createSolicitud(data.solicitud).pipe(
      map((estadoOperacion) => createSolicitudSuccess({ estadoOperacion }))
    ))
  ));

  loadSolicitudes$ = createEffect(() => this.actions$.pipe(
    ofType(loadSolicitudes),
    switchMap((data) => this.solicitudService.getSolicitudes(data.filtro).pipe(
      map((solicitudes) => loadSolicitudesSuccess({ solicitudes }))
    ))
  ));

  updateSolicitud$ = createEffect(() => this.actions$.pipe(
    ofType(updateSolicitud),
    switchMap((data) => this.solicitudService.updateSolicitud(data.solicitud).pipe(
      map((estadoOperacion) => updateSolicitudSuccess(estadoOperacion))
    ))
  ));

  deleteSolicitud$ = createEffect(() => this.actions$.pipe(
    ofType(deleteSolicitud),
    switchMap((data) => this.solicitudService.deleteSolicitud(data.id).pipe(
      map((estadoOperacion) => deleteSolicitudSuccess(estadoOperacion))
    ))
  ));
}