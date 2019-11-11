import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../model/cliente.model';
import {environment} from '../../environments/environment';
import {Barbearia} from '../model/barbearia.model';

@Injectable({
  providedIn: 'root'
})
export class BarbeariaService {

  constructor( private http: HttpClient) { }

  consulta(): Observable<any> {
    return this.http.get<Barbearia[]>(`${environment.apiUrl}/barbearia/listar`);
  }
}
