import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable, skip, Subscription, take, tap } from 'rxjs';
import { Estado } from 'src/app/core/models/estado';
import { Solicitud } from 'src/app/core/models/solicitud.model';
import { createSolicitud, loadEstados, updateSolicitud } from 'src/app/state/solicitud/redux/actions/solicitud.actions';
import { selectAllEstados, selectEstadoOperacion } from 'src/app/state/solicitud/redux/solicitud.selectors';

@Component({
  selector: 'app-gestionar-solicitudes',
  standalone: false,
  templateUrl: './gestionar-solicitudes.component.html',
  styleUrls: ['./gestionar-solicitudes.component.scss']
})
export class GestionarSolicitudesComponent implements OnInit, OnDestroy {
  protected estados$: Observable<Estado[]>;
  protected solicitudID: number = 0;
  protected solicitudFormGroup: FormGroup = new FormGroup({
    id: new FormControl(0, Validators.required),
    fechaSolicitud: new FormControl(null),
    solicitante: new FormControl(''),
    estado: new FormControl(null)
  });

  private suscription: Subscription | null = null;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.estados$ = this.store.select(selectAllEstados);
  }

  ngOnInit(): void {
    this.initSuscription();
    this.store.dispatch(loadEstados());

    this.estados$.pipe(
      filter(data => data.length > 0),
      take(1)
    ).subscribe(() => this.loadSolicitud());
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe;
  }

  private initSuscription() {
    this.suscription?.unsubscribe;
    this.suscription = this.store.select(selectEstadoOperacion)
      .pipe(skip(1))
      .subscribe((data) => {
        if (data) this.router.navigate(['solicitudes']);
      })
  }

  private loadSolicitud(): void {
    this.solicitudID = Number(this.route.snapshot.paramMap.get('id') ?? 0);

    if (this.solicitudID !== 0) this.solicitudFormGroup.controls['id'].disable();
    this.solicitudFormGroup.updateValueAndValidity();

    const solicitud: Solicitud | null = history.state.solicitud ?? null;
    if (!solicitud) return;

    this.solicitudFormGroup.patchValue({
      id: solicitud.id,
      fechaSolicitud: new Date(solicitud.fechaSolicitud ?? ''),
      solicitante: solicitud.solicitante ?? '',
      estado: solicitud.idEstado ?? null
    })
  }

  protected saveSolicitud() {
    const solicitud: Solicitud = this.getSolicitud();

    if (this.solicitudID === 0) this.store.dispatch(createSolicitud({ solicitud }))
    else this.store.dispatch(updateSolicitud({ solicitud }));
  }

  private getSolicitud(): Solicitud {
    return {
      id: Number(this.solicitudFormGroup.controls['id'].value),
      fechaSolicitud: this.solicitudFormGroup.controls['fechaSolicitud'].value ?? null,
      solicitante: this.solicitudFormGroup.controls['solicitante'].value ?? null,
      idEstado: this.solicitudFormGroup.controls['estado'].value ?? null
    }
  }
}