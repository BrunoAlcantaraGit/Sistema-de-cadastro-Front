import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { ClientesReadComponent } from './components/clientes-read/clientes-read.component';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';

@NgModule({
  declarations: [
    
  ClientesReadComponent,
  ClienteUpdateComponent,
  ClientesComponent,
  ClientesFormComponent,
  ClienteCreateComponent
  
  ],
  imports: [
 CommonModule,
 ClienteRoutingModule,
 SharedModule
  ],
 
})
export class ClienteModule { }
