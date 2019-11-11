import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../model/cliente.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Servico} from '../model/servico.model';
import {Barbearia} from '../model/barbearia.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor( private http: HttpClient) { }


  cadastroServicoBarbearia(servico: Servico): Observable<any> {
    return this.http.post<Servico>(`${environment.apiUrl}/servico/servico-barbearia`, servico);
  }

  cadastroServicoFreelance(servico: Servico): Observable<any> {
    return this.http.post<Servico>(`${environment.apiUrl}/servico/servico-freelancer`, servico);
  }

}

