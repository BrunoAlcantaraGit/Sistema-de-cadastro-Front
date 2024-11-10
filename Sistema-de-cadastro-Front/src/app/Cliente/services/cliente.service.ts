import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente, Endereco } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
url='http://localhost:8080/cliente'
enderecoUrl='http://localhost:8080/endereco'
  
constructor(private http:HttpClient) {}

listar():Observable<Cliente[]>{
   return this.http.get<Cliente[]>(`${this.url}/listar`)
}

listarPorId(id: number):Observable<Cliente>{
  return this.http.get<Cliente>(`${this.url}/buscar/${id}`)
}
salvar(cliente : Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.url + "/salvar", cliente);

}

atualizar(id:number,Cliente:Cliente){
  return this.http.put<Cliente>(`${this.url}/editar/${id}`,Cliente)
}

deletar(id:number){
  return this.http.delete(`${this.url}/deletar/${id}`)
}

buscarEndereco(cep :string){
  return this.http.get<Endereco>(`${this.enderecoUrl}/buscar-cep/${cep}`)

}
buscarClientePorDocumento(doc:string){
return this.http.get<Cliente>(`${this.url}/buscar-por-documento/${doc}`)
}


}
