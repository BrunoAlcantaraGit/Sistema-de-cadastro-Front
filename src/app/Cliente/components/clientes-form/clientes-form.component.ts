import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/cliente.model';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
//import { EnderecoService } from '../../services/endereco.service'; // Importe o serviço que fará a consulta do CEP

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  @Input() btnText!: String;
  @Input() cliente!: Cliente;
  @Output() submit: EventEmitter<Cliente> = new EventEmitter<Cliente>(); // Adicionado parênteses corretamente
  
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private clienteService: ClienteService // Injetando o serviço de consulta de CEP
  ) {}

  ngOnInit(): void {
    this.criarForm();
    this.listenToCepChanges();
  }

  criarForm(): void {
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
      if (cep.length === 8) { // Verifica se o CEP tem 8 dígitos
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

  onSubmit() {
    const clienteData: Cliente = {
      nome: this.form.value.nome,
      documento: this.form.value.documento,
      contato: {  // Alterado para um objeto, não um array
        ddd: this.form.value.contato.ddd,
        numeroTelefone: this.form.value.contato.numeroTelefone
      },
      endereco: { // Alterado para um objeto, não um array
        logradouro: this.form.value.endereco.logradouro,
        numero: this.form.value.endereco.numero,
        cep: this.form.value.endereco.cep,
        bairro: this.form.value.endereco.bairro,
        localidade: this.form.value.endereco.localidade,
        uf: this.form.value.endereco.uf,
        ibge: this.form.value.endereco.ibge
      }
    };
   
    console.log("Dados a serem enviados:", clienteData); // Exibe os dados que serão enviados
    this.submit.emit(clienteData);
  }
   

  onCancel() {
    this.route.navigate(['/clientes']); // Navega de volta para a lista de clientes
  }

  
 
}
