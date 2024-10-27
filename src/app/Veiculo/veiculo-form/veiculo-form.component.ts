import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Veiculo } from '../veiculoModel/veiculo.model';
import { VeiculoService } from '../services/veiculo-service';


@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.scss']
})
export class VeiculoFormComponent implements OnInit {

  @Input() veiculo!: Veiculo;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private veiculoService: VeiculoService
    
  ) {}

ngOnInit(): void {
  this.criarForm();

}

form!: FormGroup;

  criarForm():void{

    this.form = this.formBuilder.group({
     
      placa: [this.veiculo ? this.veiculo.placa : ''],
      renavan: [this.veiculo ? this.veiculo.renavan : ''],
      tipoRodado: [this.veiculo ? this.veiculo.tipoRodado: '']
      
    });
  }


  onSubmit(){
    const veiculoData: Veiculo = {
      id: this.form.value.id,
      placa: this.form.value.placa,
      renavan: this.form.value.renavan,
      tipoRodado: this.form.value.tipoRodado
    
    };
   
    
  }
  }


