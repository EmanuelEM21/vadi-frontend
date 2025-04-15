import { createAction, props } from '@ngrx/store';
import { Solicitud } from '../../../../core/models/solicitud.model';
import { Filtro } from 'src/app/core/models/filtro';

//#region llamada de métodos CRUD
export const createSolicitud = createAction(
  '[Solicitud] Create Solicitud',
  props<{ solicitud: Solicitud }>()
);
export const loadSolicitudes = createAction(
  '[Solicitud] Load Solicitudes',
  props<{ filtro: Filtro }>()
);
export const updateSolicitud = createAction(
  '[Solicitud] Update Solicitud',
  props<{ solicitud: Solicitud }>()
);
export const deleteSolicitud = createAction(
  '[Solicitud] Delete Solicitud',
  props<{ id: number }>()
);
//#endregion

//#region gestión de resultados obtenidos al llamar al API
export const createSolicitudSuccess = createAction(
  '[Solicitud] Create Solicitud Success',
  props<{ estadoOperacion: boolean }>()
);
export const loadSolicitudesSuccess = createAction(
  '[Solicitud] Load Solicitudes Success',
  props<{ solicitudes: Solicitud[] }>()
);
export const updateSolicitudSuccess = createAction(
  '[Solicitud] Update Solicitud Success',
  props<{ estadoOperacion: boolean }>()
);
export const deleteSolicitudSuccess = createAction(
  '[Solicitud] Delete Solicitud Success',
  props<{ estadoOperacion: boolean }>()
);
//#nendregion