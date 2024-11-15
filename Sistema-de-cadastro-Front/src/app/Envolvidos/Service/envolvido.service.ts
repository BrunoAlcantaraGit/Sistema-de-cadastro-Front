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

  salvarEnvolvido(envolvido:Envolvido): Observable<Envolvido> {
    return this.http.post<Envolvido>(`${this.url}/salvar`,envolvido)
  }

  editarEnvolvido(id:number,envolvido:Envolvido): Observable<Envolvido> {
    return this.http.put<Envolvido>(`${this.url}/editar/${id}`,envolvido)

  }

  ListarTudo():Observable<Envolvido[]>{
    return this.http.get<Envolvido[]>(`${this.url}/listar-todos`)
  }

  listarPorId(id: number):Observable<Envolvido>{
   return this.http.get<Envolvido>(`${this.url}/listar/${id}`)
  }


  deletarPorId(id:number):Observable<Envolvido[]>{
    return this.http.delete<Envolvido[]>(`${this.url}/deletar/${id}`)
  }


}
