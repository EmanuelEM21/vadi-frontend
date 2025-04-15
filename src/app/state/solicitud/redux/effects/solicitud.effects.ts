import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { loadSolicitudes, loadSolicitudesSuccess } from '../actions/solicitud.actions';
import { SolicitudService } from 'src/app/core/services/solicitud.service';

@Injectable()
export class SolicitudEffects {
  loadSolicitudes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSolicitudes),
      switchMap(() => this.solicitudService$.getSolicitudes().pipe(
        map((solicitudes) => loadSolicitudesSuccess({ solicitudes }))
      ))
    )
  );

  constructor(
    private solicitudService$: SolicitudService,
    private actions$: Actions,
  ) {}
}
