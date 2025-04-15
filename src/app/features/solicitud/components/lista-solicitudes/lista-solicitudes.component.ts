import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Filtro } from 'src/app/core/models/filtro';
import { Solicitud } from 'src/app/core/models/solicitud.model';
import { deleteSolicitud, loadSolicitudes } from 'src/app/state/solicitud/redux/actions/solicitud.actions';
import { selectAllSolicitudes } from 'src/app/state/solicitud/redux/solicitud.selectors';

@Component({
  selector: 'app-lista-solicitudes',
  standalone: false,
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.scss']
})
export class ListaSolicitudesComponent {
  protected filtro: Filtro = { columna: 'Id', valor: '', numeroPagina: 0, numeroItems: 5 };
  protected solicitudes$: Observable<Solicitud[]>;
  protected filtroFormGroup: FormGroup = new FormGroup({
    criterio: new FormControl(null),
    valor: new FormControl('')
  });

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.solicitudes$ = this.store.select(selectAllSolicitudes);
  }

  ngOnInit() {
    this.store.dispatch(loadSolicitudes({ filtro: this.filtro }));
  }

  protected eliminarSolicitud(id: number): void {
    this.store.dispatch(deleteSolicitud({ id }));
  }

  protected updateSolicitud(solicitud: Solicitud): void {
    this.router.navigate([`solicitudes/actualizar-solicitud/${solicitud.id}`, solicitud])
  }

  protected aplicarFiltros(): void {
    const criterio = this.filtroFormGroup.controls['criterio'].value;
    let valor = this.filtroFormGroup.controls['valor'].value;
    if (criterio === 'fechaSolicitud')
      valor = valor.toISOString().split('T')[0];

    this.filtro = { ...this.filtro, columna: criterio, valor: valor };
    this.store.dispatch(loadSolicitudes({ filtro: this.filtro }));
  }

  protected cleanFiltros(): void {
    this.filtroFormGroup.reset();
    this.filtro = { ...this.filtro, columna: 'id', valor: '' };
    this.store.dispatch(loadSolicitudes({ filtro: this.filtro }));
  }

  protected pageChanged(event: any) {
    this.filtro = { ...this.filtro, numeroPagina: event.pageIndex, numeroItems: event.pageSize };
    this.store.dispatch(loadSolicitudes({ filtro: this.filtro }));
  }
}