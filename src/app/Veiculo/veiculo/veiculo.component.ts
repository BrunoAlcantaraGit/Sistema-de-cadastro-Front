import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent {

  constructor(
  private route: Router, 
  private activateRouter: ActivatedRoute
){}

  goTocreate(): void{
    this.route.navigate(['veiculo/criar'])
  }

}
