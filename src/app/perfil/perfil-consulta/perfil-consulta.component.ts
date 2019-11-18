import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../../core/autentificacao/user';
import {PerfilService} from '../perfil.service';
import {Usuario} from '../../model/usuario.model';

@Component({
  selector: 'app-perfil-consulta',
  templateUrl: './perfil-consulta.component.html',
  styleUrls: ['./perfil-consulta.component.css']
})
export class PerfilConsultaComponent implements OnInit {

  userSession: User;
  usuario: Usuario;
  suscesso: number;


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




}
