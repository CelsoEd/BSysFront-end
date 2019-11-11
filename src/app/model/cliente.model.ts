import {TipoUsuario} from '../util/enuns/tipo-usuario.enum';
import {Endereco} from './endereco.model';
import {Servico} from './servico.model';

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  tipoUsuario: TipoUsuario;
  endereco: Endereco;
  descricaoPerfil: string;
  telefone: string;
  telefone2: string;
  servicos: Servico;

}
