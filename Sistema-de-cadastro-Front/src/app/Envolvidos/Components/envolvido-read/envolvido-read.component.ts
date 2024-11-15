import { Component,Input ,OnInit} from '@angular/core';
import { EnvolvidoService } from '../../Service/envolvido.service';
import { Envolvido } from '../../Model/envolvido.model';


@Component({
  selector: 'app-envolvido-read',
  templateUrl: './envolvido-read.component.html',
  styleUrls: ['./envolvido-read.component.scss']
})
export class EnvolvidoReadComponent implements OnInit {

  envolvidos!: Envolvido[];

  columnsToDisplay:string [] = ['nome', 'documento','logradouro', 'acoes',];

  constructor(
    private envolvidoService: EnvolvidoService,
  
  ){}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
  this.envolvidoService.ListarTudo().subscribe((sucesso) => {
    console.log(sucesso);
    this.envolvidos = sucesso;
  })
}

deletar(id: number): void{
  this.envolvidoService.deletarPorId(id).subscribe(() => {
    this.envolvidos = this.envolvidos.filter(envolvidos => envolvidos.id !== id);
  })
}
}