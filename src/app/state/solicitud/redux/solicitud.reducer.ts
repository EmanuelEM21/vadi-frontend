import { createReducer, on } from '@ngrx/store';
import * as SolicitudActions from './actions/solicitud.actions';
import { Solicitud } from '../../../core/models/solicitud.model';

export interface SolicitudState {
  solicitudes: Solicitud[];
}

export const initialState: SolicitudState = {
  solicitudes: []
};

export const solicitudReducer = createReducer(
  initialState,
  on(SolicitudActions.loadSolicitudesSuccess, (state, { solicitudes }) => ({
    ...state,
    solicitudes
  }))
);
