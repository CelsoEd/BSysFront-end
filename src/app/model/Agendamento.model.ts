import {EstadoAgendamento} from '../util/enuns/estado-agendamento';

export interface Agendamento {
  dataHora: string;
  status: EstadoAgendamento;
}
