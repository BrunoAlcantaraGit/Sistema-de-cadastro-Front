import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculoReadComponent } from './veiculo-read/veiculo-read.component';
import { SharedModule } from '../shared/shared.module';
import { VeiculoRoutingModule } from './veiculo-routing.module';
import { VeiculoUpdateComponent } from './veiculo-update/veiculo-update.component';






@NgModule({
  declarations: [
    VeiculoComponent,
    VeiculoFormComponent,
    VeiculoReadComponent,
    VeiculoUpdateComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    VeiculoRoutingModule
  ]
})


export class VeiculoModuleModule { }
