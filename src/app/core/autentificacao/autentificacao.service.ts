import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../../model/Login.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from './user';
import {Cliente} from '../../model/cliente.model';
import {Barbearia} from '../../model/barbearia.model';
import {Freelancer} from '../../model/freelancer.model';

@Injectable({
  providedIn: 'root'
})
export class AutentificacaoService {

  constructor(protected http: HttpClient) {
  }

  usuarioLogado: User;

  login(login: Login): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/usuario/login`, login);
  }


  cadastroCliente(cliente: Cliente): Observable<any> {
    return this.http.post<Cliente>(`${environment.apiUrl}/cliente`, cliente);
  }

  cadastroBarbearia(barbearia: Barbearia): Observable<any> {
    return this.http.post<Cliente>(`${environment.apiUrl}/barbearia/cadastro`, barbearia);
  }

  cadastroFreeLancer(freelancer: Freelancer): Observable<any> {
    return this.http.post<Cliente>(`${environment.apiUrl}/freelancer/cadastro`, freelancer);
  }

}
