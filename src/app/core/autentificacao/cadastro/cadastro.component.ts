import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AutentificacaoService} from '../autentificacao.service';
import {TipoUsuario} from '../../../util/enuns/tipo-usuario.enum';
import {CepService} from '../cep.service';
import {Cpf} from '../../../util/validadores/cpf';
import {ValidateBrService} from 'angular-validate-br';
import {Endereco} from '../../../model/endereco.model';
import {Cep} from '../../../model/Cep.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private autentificacaoService: AutentificacaoService,
              private validateBrService: ValidateBrService,
              private cepService: CepService
  ) {
  }

  public tipoUsuario: TipoUsuario;
  endereco: Endereco;
  cepConsulta: any;

  resultado: any;
  cepBusca: Cep;


  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tipoUsuario: ['CLIENTE'],
      nome: ['', Validators.required],
      cpf: ['', Cpf.isValidCpf()],
      cnpj: ['', this.validateBrService.cnpj],
      telefone: ['', Validators.required],
      telefone2: ['', Validators.required],
      email: ['', Validators.email],
      senha: ['', Validators.required, Validators.minLength(6)],
      confirmaSenha: ['', Validators.required, Validators.minLength(6)],
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

  cancelar() {
    this.router.navigate(['login']);
  }

  consultaCep(cep: string) {
    this.cepConsulta = this.cepService.buscar(cep)
      .subscribe(data => this.resultado = this.converterRespostaParaCep(data));
  }

  private converterRespostaParaCep(cepNaResposta): Cep {

    // this.form.get('cep').setValue(cepNaResposta.cep);
    this.form.get('logradouro').setValue(cepNaResposta.logradouro);
    this.form.get('complemento').setValue(cepNaResposta.complemento);
    this.form.get('bairro').setValue(cepNaResposta.bairro);
    this.form.get('cidade').setValue(cepNaResposta.localidade);
    this.form.get('uf').setValue(cepNaResposta.uf);
    return this.cepBusca;
  }
}


