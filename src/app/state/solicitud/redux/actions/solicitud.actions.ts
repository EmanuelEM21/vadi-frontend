import { createAction, props } from '@ngrx/store';
import { Solicitud } from '../../../../core/models/solicitud.model';

export const loadSolicitudes = createAction('[Solicitud] Load Solicitudes');

export const loadSolicitudesSuccess = createAction(
  '[Solicitud] Load Solicitudes Success',
  props<{ solicitudes: Solicitud[] }>()
);
