import {Injectable} from '@angular/core';
import {HttpClient, JsonpInterceptor} from '@angular/common/http';
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
    return this.http.post<Barbearia>(`${environment.apiUrl}/barbearia/cadastro`, barbearia);
  }

  cadastroFreeLancer(freelancer: Freelancer): Observable<any> {
    return this.http.post<Freelancer>(`${environment.apiUrl}/freelancer/cadastro`, freelancer);
  }

  consultaDadosBarbearia(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/barbearia/consulta/${id}`);
  }

  consultaDadosFreelancer(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/freelancer/consulta/${id}`);
  }

  consultaDadosCliente(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/cliente/consulta/${id}`);
  }

  alterarCliente(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/cliente/update`, cliente);
  }

  alterarBarbearia(barbearia: Barbearia): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/barbearia/update`, barbearia);
  }

  alterarFreeLancer(freelancer: Freelancer): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/freelancer/update`, freelancer);
  }


}
