import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AutentificacaoService} from '../autentificacao.service';
import {TipoUsuario} from '../../../util/enuns/tipo-usuario.enum';
import {CepService} from '../cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private autentificacaoService: AutentificacaoService,
  ) {
  }

  public tipoUsuario: TipoUsuario;


  form: FormGroup;

  ngOnInit(): void {
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
      uf: ['', Validators.required],
      complemento: ['', Validators.required],
    });
  }

  cadastrar() {
    if (this.form.get('tipoUsuario').value === TipoUsuario.CLIENTE) {
      this.autentificacaoService.cadastroCliente(this.form.value).subscribe(() => {
        alert('Conta criada com suscesso');
        this.router.navigate(['login']);
      });
    }
    if (this.form.get('tipoUsuario').value === TipoUsuario.BARBEARIA) {
      this.autentificacaoService.cadastroBarbearia(this.form.value).subscribe(() => {
        alert('Barbearia cadastrada com suscesso');
        this.router.navigate(['login']);
      });
    }
    if (this.form.get('tipoUsuario').value === TipoUsuario.FREELANCER) {
      this.autentificacaoService.cadastroFreeLancer(this.form.value).subscribe(() => {
        alert('Freelancer cadastrado com suscesso');
        this.router.navigate(['login']);
      });
    }
  }

  carregarNomeDepositante(reclamado) {
    console.log('Valor selecionado: ' + reclamado);
  }

  cancelar() {
    this.router.navigate(['login']);
  }
}


