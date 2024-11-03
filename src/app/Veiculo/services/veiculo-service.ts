import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../veiculoModel/veiculo.model'; 



@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
url='http://localhost:8080/veiculo'

constructor(private http:HttpClient) {}

listar():Observable<Veiculo[]>{
   return this.http.get<Veiculo[]>(`${this.url}/listar`)
}

listarPorId(id: number):Observable<Veiculo>{
  return this.http.get<Veiculo>(`${this.url}//listar-por-id/${id}`)
}
salvar(veiculo : Veiculo): Observable<Veiculo>{
  return this.http.post<Veiculo>(this.url + "/salvar", veiculo);

}

atualizar(id:number,veiculo:Veiculo){
  return this.http.put<Veiculo>(`${this.url}/editar/${id}`,veiculo)
}

deletar(id:number){
  return this.http.delete(`${this.url}/deletar/${id}`)
}


}
