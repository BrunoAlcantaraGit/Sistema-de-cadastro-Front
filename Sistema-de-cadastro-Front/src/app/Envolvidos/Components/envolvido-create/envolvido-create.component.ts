import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EnvolvidoService } from '../../Service/envolvido.service';
import { Envolvido } from '../../Model/envolvido.model';


@Component({
  selector: 'app-envolvido-create',
  templateUrl: './envolvido-create.component.html',
  styleUrls: ['./envolvido-create.component.scss']
})
export class EnvolvidoCreateComponent {
  @Input() envolvido!: Envolvido
  constructor(
    private envolvidoService: EnvolvidoService,
    private router: Router
  ){}


  criarEnvolvido(envolvido: Envolvido){
    console.log(this.envolvido)

  }
}
