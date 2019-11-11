import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Freelancer} from '../../model/freelancer.model';
import {FreelancerService} from '../freelancer.service';

@Component({
  selector: 'app-listar-freelancer',
  templateUrl: './listar-freelancer.component.html',
  styleUrls: ['./listar-freelancer.component.css']
})
export class ListarFreelancerComponent implements OnInit, OnChanges {

  freelancersConsulta: Freelancer[];
  rows: any[] = [];

  constructor(private freelancerService: FreelancerService) {
  }

  ngOnInit() {
    this.consultaTodos();
  }

  consultaTodos() {
    this.freelancerService.consulta()
      .subscribe(freelancer => {
        this.freelancersConsulta = freelancer;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.freelancers) {
      this.rows = this.groupColumns(this.freelancersConsulta);
    }
  }

  groupColumns(freelancers: Freelancer[]) {
    const newRows = [];

    for (let index = 0; index < freelancers.length; index += 3) {
      newRows.push(freelancers.slice(index, index + 3));
    }
    return newRows;
  }

}
