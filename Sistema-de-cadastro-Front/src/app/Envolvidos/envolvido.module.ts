import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EnvolvidosRoutingModule } from './envolvidos-routing.module';
import { EnvolvidosComponent } from './Components/envolvidos/envolvidos.component';
import { EnvolvidoFormComponent } from './Components/envolvido-form/envolvido-form.component';
import { EnvolvidoReadComponent } from './Components/envolvido-read/envolvido-read.component';
import { EnvolvidoCreateComponent } from './Components/envolvido-create/envolvido-create.component';
import { EnvolvidoUpdateComponent } from './Components/envolvido-update/envolvido-update.component';



@NgModule({
  declarations: [
    EnvolvidosComponent,
    EnvolvidoFormComponent,
    EnvolvidoReadComponent,
    EnvolvidoCreateComponent,
    EnvolvidoUpdateComponent
  ],




  imports: [
    CommonModule,
    SharedModule,
    EnvolvidosRoutingModule
  ]
})
export class EnvolvidoModuleModule { }
