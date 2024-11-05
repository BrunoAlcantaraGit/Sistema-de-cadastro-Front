import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculoReadComponent } from './veiculo-read/veiculo-read.component';
import { VeiculoUpdateComponent } from './veiculo-update/veiculo-update.component';
import { VeiculoCreateComponent } from './veiculo-create/veiculo-create.component';



const routes: Routes = [
  {
    path:"",
   component: VeiculoComponent
  },
  {
      path:'criar',
      component: VeiculoCreateComponent
  },

  {
      path:'editar/:id',
      component: VeiculoUpdateComponent
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  

export class VeiculoRoutingModule { }
