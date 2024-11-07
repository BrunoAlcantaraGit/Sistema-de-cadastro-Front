import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
{
  path:"home",
  component: HomeComponent
},
{
  path:'clientes',
  loadChildren: () => import('./Cliente/client.module').then(m => m.ClienteModule)
},
{
  path: 'veiculo',
  loadChildren: () => import('./Veiculo/veiculo.module').then(m => m.VeiculoModuleModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }