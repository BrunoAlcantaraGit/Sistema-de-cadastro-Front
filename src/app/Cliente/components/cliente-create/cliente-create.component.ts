import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent {
constructor(
  private router: Router,
  private clienteService: ClienteService  
){}

criarCliente(cliente: Cliente){
  this.clienteService.salvar(cliente).subscribe((resposta)=>{
    alert("Cliente salvo com sucesso")
    this.router.navigate(['/clientes'])
  })  

}
}