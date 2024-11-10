import { Component } from '@angular/core';
import { Veiculo } from '../veiculoModel/veiculo.model';
import { VeiculoService } from '../services/veiculo-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.scss']
})
export class VeiculoCreateComponent {

constructor(
  private veiculoServe: VeiculoService,
  private router: Router,
  
){}

criarVeiculo(veiculo: Veiculo){
  if(veiculo != null){
    this.veiculoServe.salvar(veiculo).subscribe(()=>{
      alert("veiculo salvo com sucesso")
      this.router.navigate(["/veiculo"])
    })
  }
 
}
}