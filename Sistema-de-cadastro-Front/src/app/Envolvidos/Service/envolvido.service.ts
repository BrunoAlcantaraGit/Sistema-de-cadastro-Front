import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Envolvido, Endereco } from '../Model/envolvido.model';

@Injectable({
  providedIn: 'root'
})
export class EnvolvidoService {
  url:string='http://localhost:8080/envolvido'
  enderecoUrl='http://localhost:8080/endereco'
  constructor(
    private http: HttpClient,
   
  ) {}

  
  buscarEndereco(cep :string){
    return this.http.get<Endereco>(`${this.enderecoUrl}/buscar-cep/${cep}`)
  
  }
}
