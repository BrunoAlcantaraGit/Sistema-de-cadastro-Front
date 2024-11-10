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
  @Output() enviar: EventEmitter<Veiculo> = new EventEmitter<Veiculo>();
  @Input() btnText!: String;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private veiculoService: VeiculoService
    
  ) {
    this.btnText = "Salvar"
  }



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


 envio(){
 
    this.enviar.emit(this.form.value);
    console.log("Dados enviados " + this.form.value);

  } 
 
  
  
  onCancel(){
    this.route.navigate(['/veiculo'])
  }
  }


