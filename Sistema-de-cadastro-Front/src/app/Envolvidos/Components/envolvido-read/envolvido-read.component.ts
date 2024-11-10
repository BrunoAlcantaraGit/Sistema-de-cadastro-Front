import { Component,Input ,OnInit} from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { EnvolvidoService } from '../../Service/envolvido.service';
import { Envolvido } from '../../Model/envolvido.model';


@Component({
  selector: 'app-envolvido-read',
  templateUrl: './envolvido-read.component.html',
  styleUrls: ['./envolvido-read.component.scss']
})
export class EnvolvidoReadComponent implements OnInit {

  envolvidos!: Envolvido[];

  columnsToDisplay:string [] = ['id','nome', 'documento', 'acoes'];

  constructor(
    private envolvidoService: EnvolvidoService,
  
  ){}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {

}
}