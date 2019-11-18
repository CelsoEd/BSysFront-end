import {TipoUsuario} from '../util/enuns/tipo-usuario.enum';
import {Endereco} from './endereco.model';
import {Servico} from './servico.model';
import {Agendamento} from './Agendamento.model';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  tipoUsuario: TipoUsuario;
  telefone: string;
  telefone2: string;
  descricaoPerfil: string;
  endereco: Endereco;
  cnpj: string;
  cpf: string;
  servicos: Servico;
  agendamentos: Agendamento;

  cep: string;
  numero: string;
  complemento: string;
  uf: string;
  cidade: string;
  logradouro: string;
  bairro: string;
}
