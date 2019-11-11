import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListarBarbeariasComponent} from './listar-barbearias/listar-barbearias.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UtilModule} from '../util/util.module';
import {BarbeariaService} from './barbearia.service';
import {BarbeariaRoutingModule} from './barbearia-routing.module';
import {CardModule} from '../util/components/card/card.module';



@NgModule({
  declarations: [
    ListarBarbeariasComponent
  ],
  imports: [
    CommonModule,
    BarbeariaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilModule,
    CardModule
  ],
  providers: [
    BarbeariaService
  ]
})
export class BarbeariaModule { }
