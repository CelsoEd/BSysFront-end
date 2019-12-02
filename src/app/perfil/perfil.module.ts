import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UtilModule} from '../util/util.module';
import {CardModule} from '../util/components/card/card.module';
import {PerfilRoutingModule} from './perfil-routing.module';
import {PerfilService} from './perfil.service';
import {PerfilConsultaComponent} from './perfil-consulta/perfil-consulta.component';

@NgModule({
  declarations: [
    PerfilConsultaComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilModule,
    CardModule,
    FormsModule
  ],
  providers: [
    PerfilService
  ]
})
export class PerfilModule { }
