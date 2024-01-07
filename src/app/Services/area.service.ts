import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Area } from '../Interfaces/area';
import { Subarea } from '../Interfaces/subarea';
import { Pais } from '../Interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private endPoint: string = environment.endPoint2;



  constructor(private http:HttpClient) { }

  getListPais():Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.endPoint}GetPaises`);
  }
  
  getListArea(idPais:number):Observable<Area[]>{
    return this.http.get<Area[]>(`${this.endPoint}GetAreas/${idPais}`);
  }

  getListSubAreaPorArea(idArea:number):Observable<Subarea[]>{
    return this.http.get<Subarea[]>(`${this.endPoint}GetSubAreas/${idArea}`);
  }
  
}

