import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NovoClienteComponent} from './novo-cliente/novo-cliente.component';
import {BuscaTodosComponent} from './busca-todos/busca-todos.component';
import {AgendamentoComponent} from './agendamento/agendamento.component';


const routes: Routes = [
  {path: 'novo', component: NovoClienteComponent},
  {path: 'lista', component: BuscaTodosComponent},
  {path: 'agendamento', component: AgendamentoComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {
}
