import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Barbearia} from '../../model/barbearia.model';
import {BarbeariaService} from '../barbearia.service';

@Component({
  selector: 'app-listar-barbearias',
  templateUrl: './listar-barbearias.component.html',
  styleUrls: ['./listar-barbearias.component.css']
})
export class ListarBarbeariasComponent implements OnInit, OnChanges {

  barbeariasConsulta: Barbearia[];
  rows: any[] = [];

  constructor(private barbeariaService: BarbeariaService) {
  }

  ngOnInit() {
    this.consultaTodos();
  }

  consultaTodos() {
    this.barbeariaService.consulta()
      .subscribe(barbearia => {
        this.barbeariasConsulta = barbearia;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.barbearias) {
      this.rows = this.groupColumns(this.barbeariasConsulta);
    }
  }

  groupColumns(barbearias: Barbearia[]) {
    const newRows = [];

    for (let index = 0; index < barbearias.length; index += 3) {
      newRows.push(barbearias.slice(index, index + 3));
    }
    return newRows;
  }

}
