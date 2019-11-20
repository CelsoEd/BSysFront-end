import {EstadoAgendamento} from '../util/enuns/estado-agendamento';

export interface Agendamento {
  idCliente: string;
  idServico: number;
  dataHora: string;
  status: EstadoAgendamento;
}
