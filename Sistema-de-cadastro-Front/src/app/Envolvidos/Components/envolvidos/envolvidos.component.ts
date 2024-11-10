import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-envolvidos',
  templateUrl: './envolvidos.component.html',
  styleUrls: ['./envolvidos.component.scss']
})
export class EnvolvidosComponent {
constructor(
  private router: Router
){}

goToCreate(): void{
  this.router.navigate(['envolvidos/criar'])
}
}
