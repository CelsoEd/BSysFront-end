import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Data} from '../../util/data';

import {User} from '../../core/autentificacao/user';
import {ClienteService} from '../cliente.service';
import {Agendamento} from '../../model/Agendamento.model';
import {EstadoAgendamento} from '../../util/enuns/estado-agendamento';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  private userSession: User;
  private servicoId: any;
  private servicoNome: any;
  private servicoValor: any;
  private servicoDescricao: any;
  form: FormGroup;
  data: any;
  hora: any;
  dataHora: string;
  dataHorar: Date;
  agendamento: Agendamento;

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private route: Router,
    private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.userSession = JSON.parse(localStorage.getItem('currentUser'));
    this.servicoId = this.router.snapshot.queryParams['id'];
    this.servicoNome = this.router.snapshot.queryParams['nome'];
    this.servicoValor = this.router.snapshot.queryParams['valor'];
    this.servicoDescricao = this.router.snapshot.queryParams['descricao'];

    this.form = this.formBuilder.group({
      data: ['', Validators.required],
      hora: ['', Validators.required],
      dataHora: ['', Validators.required]
    });
  }


  cadastrar() {
    this.dataHorar = new Date(this.dataHora);
    this.dataHora = Data.formataDataHora(this.dataHorar);

    this.clienteService.agendamento(this.preecheAgendamento()).subscribe(() => {
      alert('Agendamento realizado com suscesso');
      this.route.navigate(['home']);
    });

  }

  preecheAgendamento() {
    return {
      idCliente: this.userSession.id,
      idServico: this.servicoId,
      dataHora: this.dataHora,
      status: EstadoAgendamento.SOLICITADO
    };


  }
}
