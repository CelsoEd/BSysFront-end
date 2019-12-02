import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../core/autentificacao/user';
import {PerfilService} from '../perfil.service';
import {Usuario} from '../../model/usuario.model';
import {TipoUsuario} from '../../util/enuns/tipo-usuario.enum';
import {query} from '@angular/animations';
import {Servico} from '../../model/servico.model';
import {$} from 'protractor';

@Component({
  selector: 'app-perfil-consulta',
  templateUrl: './perfil-consulta.component.html',
  styleUrls: ['./perfil-consulta.component.css']
})
export class PerfilConsultaComponent implements OnInit {

  userSession: User;
  usuario: Usuario;
  suscesso: number;
  tipoUsuario: TipoUsuario;
  update: any;
  clienteConsulta: Usuario;


  constructor(private perfilService: PerfilService,
              private router: Router,
              private router2: ActivatedRoute) {

  }

  ngOnInit() {
    this.userSession = JSON.parse(localStorage.getItem('currentUser'));

    const user = this.router2.snapshot.queryParams['id'];
    const tipoUsuario = this.router2.snapshot.queryParams['tipoUsuario'];

    if (tipoUsuario === 'BARBEARIA') {
      this.perfilService.consultaDadosBarbearia(user).subscribe(usuario => {
        this.usuario = usuario;
      });
    }
    if (tipoUsuario === 'FREELANCER') {
      this.perfilService.consultaDadosFreelancer(user).subscribe(usuario => {
        this.usuario = usuario;
      });
    }
    if (tipoUsuario === 'CLIENTE') {
      this.perfilService.consultaDadosCliente(user).subscribe(usuario => {
        this.usuario = usuario;
      });
    }
  }


  confirmar(id: number) {
    this.perfilService.confirmarAgendamento(id).subscribe();
    window.parent.location.reload();
  }

  cancelar(id: number) {
    this.perfilService.cancelarAgendamento(id).subscribe();
    window.parent.location.reload();
  }

  consultar(id: string) {
    this.perfilService.consultaDadosCliente(id).subscribe(usuario => {
      this.clienteConsulta = usuario;
    });
    alert(`Nome: ${this.clienteConsulta.nome},
    Telefone: ${this.clienteConsulta.telefone}`);
  }


  reload(id: number) {
    localStorage.setItem('update', 'sim');
    this.update = localStorage.getItem('update');
  }
}
