import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UtilModule} from '../util/util.module';
import {ServicoService} from './servico.service';
import {NovoServicoComponent} from './novo-servico/novo-servico.component';
import {ServicoRoutingModule} from './servico-routing.module';



@NgModule({
  declarations: [
    NovoServicoComponent
  ],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilModule
  ],
  providers: [
    ServicoService
  ]
})
export class ServicoModule { }
