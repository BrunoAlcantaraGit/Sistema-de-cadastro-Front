
import { Component, inject, Input,OnInit,Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Envolvido} from '../../Model/envolvido.model';
import { EnvolvidoService } from '../../envolvido.service';


@Component({
  selector: 'app-envolvido-form',
  templateUrl: './envolvido-form.component.html',
  styleUrls: ['./envolvido-form.component.scss']
 
})
export class EnvolvidoFormComponent implements OnInit{

@Input() envolvido!:Envolvido
@Output() enviar: EventEmitter<Envolvido> = new EventEmitter<Envolvido>();

form!: FormGroup;
constructor(
  private fomrBuilder: FormBuilder,
  private envolvidoService: EnvolvidoService,
  private router: Router
){}

 ngOnInit(): void {
  this.criarFormulario()
    
  }


  criarFormulario(): void {
    this.form = this.fomrBuilder.group({
     
      nome: [this.envolvido ? this.envolvido.nome : '',],
      documento: [this.envolvido ? this.envolvido.documento : '', [Validators.required]],
      
        contato: this.fomrBuilder.group({
        ddd: [this.envolvido ? this.envolvido.contato?.ddd : ''],
        numeroTelefone: [this.envolvido ? this.envolvido.contato?.numeroTelefone : ''],
      }),

        endereco: this.fomrBuilder.group({
        logradouro: [this.envolvido ? this.envolvido.endereco?.logradouro : ''],
        numero: [this.envolvido ? this.envolvido.endereco?.numero : ''],
        cep: [this.envolvido ? this.envolvido.endereco?.cep : '', [Validators.required]], // Validar o CEP
        bairro: [this.envolvido ? this.envolvido.endereco?.bairro : ''],
        localidade: [this.envolvido ? this.envolvido.endereco?.localidade : ''],
        uf: [this.envolvido ? this.envolvido.endereco?.uf : ''],
        ibge: [this.envolvido? this.envolvido.endereco?.ibge: '']
      })
    });
  }
  envio(){
    console.log("Dados enviados " + this.form.value);
    this.enviar.emit(this.form.value)
    
  }

  onCancel(){
    this.router.navigate(['envolvidos'])
  }

}

