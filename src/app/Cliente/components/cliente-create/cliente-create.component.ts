import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent {
  btnSalvar: String = 'Salvar';

  constructor(private clienteSevice: ClienteService, private router: Router){}

  criarCliente(cliente:Cliente){
    //this.clienteSevice.salvar(cliente).subscribe(() =>{this.router.navigate(['/cliente'])})
    this.clienteSevice.salvar(cliente).subscribe()
  }
}
