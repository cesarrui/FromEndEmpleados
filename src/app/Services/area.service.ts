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
    return this.http.get<Pais[]>(`${environment.getPaises}`);
  }
  
  getListArea(idPais:number):Observable<Area[]>{
    return this.http.get<Area[]>(`${environment.getAreas.replace("{idPais}",idPais.toString())}`);
  }

  getListSubAreaPorArea(idArea:number):Observable<Subarea[]>{
    return this.http.get<Subarea[]>(`${environment.getSubAreas.replace("{idArea}", idArea.toString())}`);
  }
  
}

