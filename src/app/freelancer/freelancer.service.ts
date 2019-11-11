import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Freelancer} from '../model/freelancer.model';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor( private http: HttpClient) { }

  consulta(): Observable<any> {
    return this.http.get<Freelancer[]>(`${environment.apiUrl}/freelancer/listar`);
  }
}
