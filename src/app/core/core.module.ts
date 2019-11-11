import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {MenuLateralComponent} from './menu-lateral/menu-lateral.component';
import {CoreRoutingModule} from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './autentificacao/login/login.component';
import { CadastroComponent } from './autentificacao/cadastro/cadastro.component';
import {UtilModule} from '../util/util.module';


@NgModule({
  declarations: [
    HomeComponent,
    MenuLateralComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilModule
  ],
  exports: [
    MenuLateralComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
