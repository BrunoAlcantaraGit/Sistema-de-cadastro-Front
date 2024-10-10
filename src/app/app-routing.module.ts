import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
{
  path:"",
  component: HomeComponent
},
{
  path:'clientes',
  loadChildren: () => import('./Cliente/client.module').then(m => m.ClienteModule)
},
{
  path: 'veiculo',
  loadChildren: () => import('./Cliente/client.module').then(m => m.ClienteModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }