import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  
  constructor(
    private router: Router, 
    private activateRouter: ActivatedRoute
    ){}

  goToCreate():void{
    this.router.navigate(['clientes/criar'])
    
  }
}
