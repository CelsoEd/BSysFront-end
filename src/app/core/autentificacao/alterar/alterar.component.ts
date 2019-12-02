import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {AutentificacaoService} from '../autentificacao.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Barbearia} from '../../../model/barbearia.model';
import {Observable} from 'rxjs';
import {Usuario} from '../../../model/usuario.model';
import {CanDisable} from '@angular/material';
import {TipoUsuario} from '../../../util/enuns/tipo-usuario.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {

  user: User;
  form: FormGroup;
  usuario: Usuario;
  suscesso: number;

  constructor(
    private formBuilder: FormBuilder,
    private autentificacaoService: AutentificacaoService,
    private router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.suscesso = 1;

  }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      tipoUsuario: [''],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      cnpj: ['', Validators.required],
      telefone: ['', Validators.required],
      telefone2: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required, Validators.minLength(3)],
      confirmaSenha: ['', Validators.required, Validators.minLength(3)],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      complemento: ['', Validators.required],
      descricaoPerfil: ['', Validators.required]
    });
    if (this.user.tipoUsuario === 'BARBEARIA') {
      await this.autentificacaoService.consultaDadosBarbearia(this.user.id).subscribe(usuario => {
        this.usuario = usuario;
      });
    }
    if (this.user.tipoUsuario === 'FREELANCER') {
      await this.autentificacaoService.consultaDadosFreelancer(this.user.id).subscribe(usuario => {
        this.usuario = usuario;
      });
    }
    if (this.user.tipoUsuario === 'CLIENTE') {
      await this.autentificacaoService.consultaDadosCliente(this.user.id).subscribe(usuario => {
        this.usuario = usuario;
      });
    }

  }

  alterar() {
    if (this.usuario.tipoUsuario === TipoUsuario.CLIENTE) {
      this.autentificacaoService.alterarCliente(this.preecheendereco(this.usuario)).subscribe(() => {
        alert('Dados alterado com suscesso');
        this.router.navigate(['home']);
      });
    }
    if (this.usuario.tipoUsuario === TipoUsuario.BARBEARIA) {
      this.autentificacaoService.alterarBarbearia(this.preecheendereco(this.usuario)).subscribe(() => {
        alert('Dados alterado com suscesso');
        this.router.navigate(['home']);
      });
    }
    if (this.usuario.tipoUsuario === TipoUsuario.FREELANCER) {
      this.autentificacaoService.alterarFreeLancer(this.preecheendereco(this.usuario)).subscribe(() => {
        alert('Dados alterado com suscesso');
        this.router.navigate(['home']);
      });
    }
  }

  cancelar() {

  }

  preecheendereco(usuario: Usuario) {
    usuario.cidade = usuario.endereco.cidade;
    usuario.cep = usuario.endereco.cep;
    usuario.numero = usuario.endereco.numero;
    usuario.complemento = usuario.endereco.complemento;
    usuario.uf = usuario.endereco.uf;
    usuario.logradouro = usuario.endereco.logradouro;
    usuario.bairro = usuario.endereco.bairro;
    usuario.tipoUsuario = usuario.tipoUsuario;
    return usuario;

  }
}
