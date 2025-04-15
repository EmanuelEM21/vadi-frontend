import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layout/full/full.component';

const routes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    {
      path: '',
      redirectTo: 'solicitudes',
      pathMatch: 'full'
    },
    {
      path: 'solicitudes',
      loadChildren: () => import('./features/solicitud/solicitud.module').then((m) => m.SolicitudModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }