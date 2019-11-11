import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NovoServicoComponent} from './novo-servico/novo-servico.component';


const routes: Routes = [
  {path: 'novo-servico', component: NovoServicoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
