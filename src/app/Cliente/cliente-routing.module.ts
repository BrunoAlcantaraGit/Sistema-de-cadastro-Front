import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { combineLatest } from 'rxjs';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';


const routes: Routes = [
{
  path:"",
 component: ClientesComponent
},
{
    path:'criar',
    component: ClienteCreateComponent
},
{
    path:'editar/:id',
    component: ClienteUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }