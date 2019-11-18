import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PerfilConsultaComponent} from './perfil-consulta/perfil-consulta.component';


const routes: Routes = [
  {path: 'usuario', component: PerfilConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule {
}
