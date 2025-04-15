import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  solicitudes$: Observable<Solicitud[]>;

  constructor(private store: Store) {
    console.log('INIT')
    this.solicitudes$ = this.store.select(selectAllSolicitudes);
  }

  ngOnInit() {
    this.store.dispatch(loadSolicitudes());
  }
}