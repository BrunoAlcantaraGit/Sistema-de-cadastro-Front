import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvolvidosComponent } from './Components/envolvidos/envolvidos.component';
import { EnvolvidoCreateComponent } from './Components/envolvido-create/envolvido-create.component';
import { EnvolvidoUpdateComponent } from './Components/envolvido-update/envolvido-update.component';

const routes: Routes = [
  {
    path:"",
    component: EnvolvidosComponent
  },

{
  path:"criar",
  component: EnvolvidoCreateComponent
},
{
  path:"editar/:id",	
  component: EnvolvidoUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvolvidosRoutingModule { }
