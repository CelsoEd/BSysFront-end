import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(protected http: HttpClient) {
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
}
