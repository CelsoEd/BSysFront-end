import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule'},
  {path: 'conta', loadChildren: './conta/conta.module#ContaModule'},
  {path: 'transacoes', loadChildren: './transacoes/transacoes.module#TransacoesModule'},
  {path: 'barbearia', loadChildren: './barbearia/barbearia.module#BarbeariaModule'},
  {path: 'freelancer', loadChildren: './freelancer/freelancer.module#FreelancerModule'},
  {path: 'servico', loadChildren: './servico/servico.module#ServicoModule'},
  {path: 'perfil', loadChildren: './perfil/perfil.module#PerfilModule'},
  {path: '', loadChildren: './core/core.module#CoreModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
