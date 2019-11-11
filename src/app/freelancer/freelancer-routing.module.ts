import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListarFreelancerComponent} from './listar-freelancer/listar-freelancer.component';


const routes: Routes = [
  {path: 'lista', component: ListarFreelancerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerRoutingModule {
}
