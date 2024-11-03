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
  @Output() submit: EventEmitter<Veiculo> = new EventEmitter<Veiculo>();
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
     
      placa: [this.veiculo ? this.veiculo.placa : '', [Validators.required]],
      renavan: [this.veiculo ? this.veiculo.renavan : '',[Validators.required]],
      tipoRodado: [this.veiculo ? this.veiculo.tipoRodado: '',[Validators.required]]
      
    });
  }


  onSubmit(){
    const veiculoData: Veiculo = {
      id: this.form.value.id,
      placa: this.form.value.placa,
      renavan: this.form.value.renavan,
      tipoRodado: this.form.value.tipoRodado
    
    };
   
    this.submit.emit(veiculoData);
    console.log("Dados enviados", veiculoData)
    this.veiculoService.salvar(veiculoData).subscribe()
  }

  onCancel(){
    this.route.navigate(['/veiculo'])
  }
  }


