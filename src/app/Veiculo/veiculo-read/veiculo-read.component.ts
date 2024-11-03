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
    veiculoServive: VeiculoService
  ){}

  columnsToDisplay = ['id', 'placa', 'renavan', 'tipoRodado'];

  ngOnInit(): void {
    this.listar();
  
}

listar(){

}



}