import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TipoUsuario} from '../../util/enuns/tipo-usuario.enum';
import {ServicoService} from '../servico.service';
import {TransacaoTransferencia} from '../../model/transacao.model';
import {Data} from '../../util/data';
import {Canal} from '../../util/enuns/canal.enum';
import {TipoTransacao} from '../../util/enuns/tipo-transacao.enum';
import {Servico} from '../../model/servico.model';
import {User} from '../../core/autentificacao/user';

@Component({
  selector: 'app-novo-servico',
  templateUrl: './novo-servico.component.html',
  styleUrls: ['./novo-servico.component.css']
})
export class NovoServicoComponent implements OnInit {

  private usuario: User;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private servicoService: ServicoService
  ) {
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));

  }

  public tipoUsuario: TipoUsuario;


  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: [''],
      valor: ['', Validators.required]
    });
  }


  cadastrar() {
    if (this.usuario.tipoUsuario === 'BARBEARIA') {
      this.servicoService.cadastroServicoBarbearia(this.getServicoCompleto(this.form.value)).subscribe(() => {
        alert('Servico criado com suscesso');
        this.router.navigate(['home']);
      });
    }
    if (this.usuario.tipoUsuario === 'FREELANCER') {
      this.servicoService.cadastroServicoFreelance(this.getServicoCompleto(this.form.value)).subscribe(() => {
        alert('Servico criado com suscesso');
        this.router.navigate(['home']);
      });
    }

  }

  private getServicoCompleto(servico: Servico) {
    return {
      id: this.usuario.id,
      nome: servico.nome,
      descricao: servico.descricao,
      valor: servico.valor
    };
  }

  cancelar() {
    this.router.navigate(['home']);
  }
}
