import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deporte } from '../models/deporte.model';

const baseURL="http://localhost:8090/rest/util";

@Injectable({
  providedIn: 'root'
})
export class DeporteService {

  constructor(private http:HttpClient) { }

  listaDeporte():Observable<Deporte[]>{
   return this.http.get<Deporte[]>(baseURL+"/deporte");
  }
}
