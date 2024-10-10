import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.scss']
})
export class ClientesReadComponent implements OnInit {
 clientes!: Cliente[]
 
  constructor(
    private clienteService: ClienteService
  ){}
  
  displayedColumns: string[] = ['id', 'nome', 'email', 'dataNascimento','acoes'];
  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.clienteService.listar().subscribe( (sucesso)=>{
      console.log(sucesso)
      this.clientes = sucesso
    } 
    
    )
  }
  deletar(id:number):void{
    this.clienteService.deletar(id).subscribe(()=> {
      this.listar();
    })
  }

}
