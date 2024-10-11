import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
url='http://localhost:8080/cliente'
  
constructor(private http:HttpClient) {}

listar():Observable<Cliente[]>{
   return this.http.get<Cliente[]>(this.url)
}

listarPorId(id: number):Observable<Cliente>{
  return this.http.get<Cliente>(`${this.url}/${id}`)
}
salvar(cliente : Cliente){
  //return this.http.post<Cliente>(this.url,cliente)
  return this.http.post<Cliente>(this.url + "/salvar", cliente);

}

atualiar(id: number,Cliente:Cliente){
  return this.http.put<Cliente>(`${this.url}/${id}`,Cliente)
}
deletar(id:number){
  return this.http.delete(`${this.url}/${id}`)
}
}

