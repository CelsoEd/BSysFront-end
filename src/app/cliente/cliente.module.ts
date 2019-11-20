import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NovoClienteComponent} from './novo-cliente/novo-cliente.component';
import {ClienteRoutingModule} from './cliente-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClienteService} from './cliente.service';
import { BuscaTodosComponent } from './busca-todos/busca-todos.component';
import {UtilModule} from '../util/util.module';
import { AgendamentoComponent } from './agendamento/agendamento.component';


@NgModule({
  declarations: [NovoClienteComponent, BuscaTodosComponent, AgendamentoComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule {
}
