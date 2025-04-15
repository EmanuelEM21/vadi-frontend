import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SolicitudState } from './solicitud.reducer';

export const selectSolicitudState = createFeatureSelector<SolicitudState>('solicitud');

export const selectAllSolicitudes = createSelector(
  selectSolicitudState,
  (state) => state.solicitudes
);