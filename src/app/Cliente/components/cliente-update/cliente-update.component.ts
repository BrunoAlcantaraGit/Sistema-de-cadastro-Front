import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {
cliente!: Cliente;
id!: number;
btnEditar: String;

constructor(private router: Router,
   private activateRoute: ActivatedRoute, 
   private clienteService: ClienteService 
   ){
this.btnEditar = "Atualizar"
}




  ngOnInit(): void {
   this.id = Number(this.activateRoute.snapshot.paramMap.get('id'))
   this.listarPorId(this.id);
  }
  listarPorId(id:number): void{
    this.clienteService.listarPorId(id).subscribe(retorno =>{
    this.cliente = retorno
   
    })
  }
  atualizarCliente(cliente: Cliente){
      this.clienteService.atualizar(this.id, cliente).subscribe(()=>{
      this.router.navigate(['/clientes']);
    })
  }
}
