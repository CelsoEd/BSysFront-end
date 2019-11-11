import {TipoUsuario} from '../util/enuns/tipo-usuario.enum';
import {Endereco} from './endereco.model';
import {Servico} from './servico.model';

export interface Freelancer {
  id: string;
  nome: string;
  email: string;
  senha: string;
  cnpj: string;
  tipoUsuario: TipoUsuario;
  endereco: Endereco;
  descricaoPerfil: string;
  telefone: string;
  telefone2: string;
  servicos: Servico;

}
