import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListarFreelancerComponent} from './listar-freelancer/listar-freelancer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UtilModule} from '../util/util.module';
import {CardModule} from '../util/components/card/card.module';
import {FreelancerService} from './freelancer.service';
import {FreelancerRoutingModule} from './freelancer-routing.module';


@NgModule({
  declarations: [ListarFreelancerComponent],
  imports: [
    CommonModule,
    FreelancerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilModule,
    CardModule
  ],
  providers: [
    FreelancerService
  ]
})
export class FreelancerModule {
}
