import {Injectable} from '@angular/core';
import {Cep} from '../../model/Cep.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  resultado: any;

  constructor(private http: HttpClient) {
  }

  buscar(cep: string) {
    return this.http
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .subscribe(data => this.resultado = data);
  }

  private converterRespostaParaCep(cepNaResposta): Cep {

    // tslint:disable-next-line:prefer-const
    let cep: Cep;
    cep.cep = cepNaResposta.cep;
    cep.logradouro = cepNaResposta.logradouro;
    cep.complemento = cepNaResposta.complemento;
    cep.bairro = cepNaResposta.bairro;
    cep.cidade = cepNaResposta.localidade;
    cep.estado = cepNaResposta.uf;

    return cep;
  }
}
