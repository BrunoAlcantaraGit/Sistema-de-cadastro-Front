import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculoModel/veiculo.model';
import { VeiculoService } from '../services/veiculo-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.scss']
})
export class VeiculoUpdateComponent {

  veiculo!:Veiculo;
  id!: number;
  btnEditar: String;
 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private veiculoService: VeiculoService
    
  ){
    this.btnEditar = "Atualizar"
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.listarPorId(this.id);
   }

   listarPorId(id: number){
    this.veiculoService.listarPorId(id).subscribe(retorno =>{
      this.veiculo = retorno
   })
   }

  atualizarveiculo(veiculo:Veiculo){
    this.veiculoService.editarVeiculo(this.id,veiculo).subscribe(()=>{
      alert("Veículo atualizado com sucesso")
      this.router.navigate(["/veiculo"])
    })
  }

}
