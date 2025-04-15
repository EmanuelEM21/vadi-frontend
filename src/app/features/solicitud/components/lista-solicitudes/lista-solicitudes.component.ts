import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Filtro } from 'src/app/core/models/filtro';
import { Solicitud } from 'src/app/core/models/solicitud.model';
import { loadSolicitudes } from 'src/app/state/solicitud/redux/actions/solicitud.actions';
import { selectAllSolicitudes } from 'src/app/state/solicitud/redux/solicitud.selectors';

@Component({
  selector: 'app-lista-solicitudes',
  standalone: false,
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.scss']
})
export class ListaSolicitudesComponent {
  private filtro: Filtro = { columna: 'Id', valor: '', numeroPagina: 0, numeroItems: 5 };
  protected solicitudes$: Observable<Solicitud[]>;

  constructor(private store: Store) {
    this.solicitudes$ = this.store.select(selectAllSolicitudes);
  }

  ngOnInit() {
    this.store.dispatch(loadSolicitudes({ filtro: this.filtro }));
  }
}