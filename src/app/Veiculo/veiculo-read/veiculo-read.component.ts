import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculoModel/veiculo.model';
import { VeiculoService } from '../services/veiculo-service';


@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.scss']
})
export class VeiculoReadComponent {

  veiculos!: Veiculo[]

  constructor(
   private  veiculoServive: VeiculoService
  ){}

  columnsToDisplay = ['id', 'placa', 'renavan', 'tipoRodado'];

  ngOnInit(): void {
    this.listar();
  
}

listar(){

this.veiculoServive.listar().subscribe((sucesso)=>{
  console.log(sucesso)
  this.veiculos = sucesso

})

}

deletar(id: number){
  this.veiculoServive.deletar(id).subscribe(() => {
    // Remover o cliente deletado do array de clientes
    this.veiculos = this.veiculos.filter(veiculo => veiculo.id !== id);
  });
}

}