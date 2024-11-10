import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/cliente.model';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  @Input() btnText!: String;
  @Input() cliente!: Cliente;
  @Output() enviar: EventEmitter<Cliente> = new EventEmitter<Cliente>(); 
  
  form!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private clienteService: ClienteService 
  ) {
    this.btnText = "Salvar"
  }

  


  ngOnInit(): void {
    this.criarForm();
    this.listenToCepChanges();
  }

  criarForm():void{
      this.form = this.formBuilder.group({
     
      nome: [this.cliente ? this.cliente.nome : '',],
      documento: [this.cliente ? this.cliente.documento : '', [Validators.required]],
      
        contato: this.formBuilder.group({
        ddd: [this.cliente ? this.cliente.contato?.ddd : ''],
        numeroTelefone: [this.cliente ? this.cliente.contato?.numeroTelefone : ''],
      }),

        endereco: this.formBuilder.group({
        logradouro: [this.cliente ? this.cliente.endereco?.logradouro : ''],
        numero: [this.cliente ? this.cliente.endereco?.numero : ''],
        cep: [this.cliente ? this.cliente.endereco?.cep : '', [Validators.required]], // Validar o CEP
        bairro: [this.cliente ? this.cliente.endereco?.bairro : ''],
        localidade: [this.cliente ? this.cliente.endereco?.localidade : ''],
        uf: [this.cliente ? this.cliente.endereco?.uf : ''],
        ibge: [this.cliente? this.cliente.endereco?.ibge: '']
      })
    });
  }
  
  listenToCepChanges(): void {
    this.form.get('endereco.cep')?.valueChanges.subscribe(cep => {
      if (cep.length === 8) { 
        this.clienteService.buscarEndereco(cep).subscribe(endereco => {
          this.form.patchValue({
            endereco: {
              logradouro: endereco.logradouro||'',
              bairro: endereco.bairro||'',
              localidade:endereco.localidade||'',
              uf: endereco.uf||'',
              ibge: endereco.ibge||''
            }
          });
        });
      }
    });
  }

  envio(){
   
    console.log("Dados a serem enviados:", this.form.value);
    this.enviar.emit(this.form.value); 
    
  }
   

  onCancel() {
    this.route.navigate(['/clientes']);
  
 
}

}