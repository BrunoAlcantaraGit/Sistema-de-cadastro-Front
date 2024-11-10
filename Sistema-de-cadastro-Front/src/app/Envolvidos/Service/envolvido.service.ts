import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Envolvido } from '../Model/envolvido.model';

@Injectable({
  providedIn: 'root'
})
export class EnvolvidoService {
  url:string='http://localhost:8080/envolvido'
  constructor(
    private http: HttpClient,
   
  ) { }
}
