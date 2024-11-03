import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { combineLatest } from 'rxjs';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';


const routes: Routes = [
{
  path:"",
 component: ClientesComponent
},
{
    path:'criar',
    component: ClientesFormComponent
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