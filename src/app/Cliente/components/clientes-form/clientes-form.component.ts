import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent  implements OnInit{
 
  @Input() btnText!: String;
  @Input() cliente!: Cliente; 
  
 @Output() submit: EventEmitter<Cliente>
 form!: FormGroup;
  
  
  constructor(
    private formBuilder: FormBuilder,
    private route : Router
  ){
    this.submit = new EventEmitter<Cliente>
  }
  ngOnInit(): void {
    this.criarForm();
  }
  criarForm(): void{
    this.form = this.formBuilder.group({
      nome:[this.cliente ? this.cliente.nome : '', [Validators.required]],
      email:[this.cliente ? this.cliente.email : '', [Validators.required]],
      documento:[this.cliente ? this.cliente.documento : '', [Validators.required]],
      dataNascimento:[this.cliente ? this.cliente.dataNascimento : '', [Validators.required]],
      
      contato: this.formBuilder.group({
        ddd:[this.cliente ? this.cliente.contato?.ddd:''],
        telefone:[this.cliente ? this.cliente.contato?.telefone:''],
  
      }),

        endereco:this.formBuilder.group({
        rua:[this.cliente ? this.cliente.endereco ?.rua: ''],
        numero:[this.cliente ? this.cliente.endereco?.numero : ''],
        cep:[this.cliente ? this.cliente.endereco?.cep: ''],
        bairro:[this.cliente ? this.cliente.endereco?.bairro: ''],
        cidade:[this.cliente ? this.cliente.endereco?.cidade : ''],
        uf:[this.cliente ? this.cliente.endereco?.uf: ''],
      })
    })

}
onSubmit(){
  this.submit.emit(this.form.value)
}
onCancel(){
  this.route.navigate(['/clientes'])
}

}