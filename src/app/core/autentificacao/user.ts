import {TipoUsuario} from '../../util/enuns/tipo-usuario.enum';

export interface User {
  id: string;
  nome: string;
  email: string;
  token: string;
  tipoUsuario: TipoUsuario;
}
