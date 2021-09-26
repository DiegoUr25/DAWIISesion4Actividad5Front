import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modalidad } from '../models/modalidad.model';

const BaseURL="http://localhost:8090/rest/modalidad";

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  constructor(private http:HttpClient) { }

 registraModalidad (data:Modalidad):Observable<any>{
   return this.http.post(BaseURL,data);
 }

}
