import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Documento } from '../Interfaces/documento'; 
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private endPoint: string = environment.endPoint1;
  //private apiURL: string = this.endPoint + "Documento/";

  constructor(private http:HttpClient) { }

  getList():Observable<Documento[]>{
    return this.http.get<Documento[]>(`${environment.getdocumentos}`);
  }
}
