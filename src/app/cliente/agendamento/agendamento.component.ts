import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  private userSession: any;
  private servicoId: any;
  private servicoNome: any;
  private servicoValor: any;
  private servicoDescricao: any;
  form: FormGroup;
  data: any;
  hora: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.userSession = JSON.parse(localStorage.getItem('currentUser'));
    this.servicoId = this.router.snapshot.queryParams['id'];
    this.servicoNome = this.router.snapshot.queryParams['nome'];
    this.servicoValor = this.router.snapshot.queryParams['valor'];
    this.servicoDescricao = this.router.snapshot.queryParams['descricao'];

    this.form = this.formBuilder.group({
      data: ['', Validators.required],
      hora: ['', Validators.required]
    });
}


}
