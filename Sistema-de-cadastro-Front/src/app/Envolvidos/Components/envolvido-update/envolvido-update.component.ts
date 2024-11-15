import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Envolvido } from '../../Model/envolvido.model';
import { EnvolvidoService } from '../../Service/envolvido.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-envolvido-update',
  templateUrl: './envolvido-update.component.html',
  styleUrls: ['./envolvido-update.component.scss']
})
export class EnvolvidoUpdateComponent implements OnInit {
  envolvido!: Envolvido;
  id!: number;
  btnEditar: String;

  constructor(
    private envolviodoService: EnvolvidoService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ){
    this.btnEditar = "Atualizar"
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.listarPorId(this.id);
    
  }
  listarPorId(id: number): void{
    this.envolviodoService.listarPorId(id).subscribe(retorno => {
      this.envolvido = retorno
    })
  }
  atualizarEnvolvido(envolvido: Envolvido){
    this.envolviodoService.editarEnvolvido(this.id,envolvido).subscribe(()=>{
      alert("Envolvido atualizado com sucesso")
      this.router.navigate(['/envolvidos'])
    })  
  }
    }
  

