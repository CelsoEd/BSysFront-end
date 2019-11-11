import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListarBarbeariasComponent} from './listar-barbearias/listar-barbearias.component';


const routes: Routes = [
  {path: 'lista', component: ListarBarbeariasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarbeariaRoutingModule {
}
