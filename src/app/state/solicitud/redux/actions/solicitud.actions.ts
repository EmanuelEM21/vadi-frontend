import { createAction, props } from '@ngrx/store';
import { Solicitud } from '../../../../core/models/solicitud.model';
import { Filtro } from 'src/app/core/models/filtro';
import { Estado } from 'src/app/core/models/estado';

//#region llamada de métodos CRUD
export const createSolicitud = createAction(
  '[Solicitud] Create Solicitud',
  props<{ solicitud: Solicitud }>()
);
export const loadSolicitudes = createAction(
  '[Solicitud] Load Solicitudes',
  props<{ filtro: Filtro | null }>()
);
export const updateSolicitud = createAction(
  '[Solicitud] Update Solicitud',
  props<{ solicitud: Solicitud }>()
);
export const deleteSolicitud = createAction(
  '[Solicitud] Delete Solicitud',
  props<{ id: number }>()
);
export const loadEstados = createAction(
  '[Solicitud] Load Estados'
)
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
export const loadEstadosSuccess = createAction(
  '[Solicitud] Load Estados Success',
  props<{ estados: Estado[] }>()
);
//#nendregion