import { createReducer, on } from '@ngrx/store';
import { Solicitud } from '../../../core/models/solicitud.model';
import { createSolicitudSuccess, deleteSolicitudSuccess, loadSolicitudesSuccess, updateSolicitudSuccess } from './actions/solicitud.actions';

export interface SolicitudState {
  solicitudes: Solicitud[];
  estadoOperacion: boolean;
}

export const initialState: SolicitudState = {
  solicitudes: [],
  estadoOperacion: true
};

export const solicitudReducer = createReducer(
  initialState,
  on(loadSolicitudesSuccess, (state, { solicitudes }) => ({
    ...state,
    solicitudes
  })),
  on(createSolicitudSuccess, (state, { estadoOperacion }) => ({
    ...state,
    estadoOperacion
  })),
  on(updateSolicitudSuccess, (state, { estadoOperacion }) => ({
    ...state,
    estadoOperacion
  })),
  on(deleteSolicitudSuccess, (state, { estadoOperacion }) => ({
    ...state,
    estadoOperacion
  }))
);