import { createReducer, on } from '@ngrx/store';
import { Solicitud } from '../../../core/models/solicitud.model';
import { createSolicitudSuccess, deleteSolicitudSuccess, loadEstadosSuccess, loadSolicitudesSuccess, updateSolicitudSuccess } from './actions/solicitud.actions';
import { Estado } from 'src/app/core/models/estado';

export interface SolicitudState {
  solicitudes: Solicitud[];
  estados: Estado[];
  estadoOperacion: boolean;
}

export const initialState: SolicitudState = {
  solicitudes: [],
  estados: [],
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
  })),
  on(loadEstadosSuccess, (state, { estados }) => ({
    ...state,
    estados
  }))
);