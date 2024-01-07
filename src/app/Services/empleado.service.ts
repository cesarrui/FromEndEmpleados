import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Empleado } from '../Interfaces/empleado'; 

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private endPoint: string = environment.endPoint1;
  public actualizar: boolean = false;
  constructor(private http:HttpClient) { }

  getList():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.endPoint}GetEmpleados`);
  }

  add(modelo:Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(`${this.endPoint}AddEmpleado`,modelo);
  }
  update(modelo:Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(`${this.endPoint}UpdateEmpleado`,modelo);
  }
  delete(idEmpleado: number): Observable<void>{
    return this.http.delete<void>(`${this.endPoint}DeleteEmpleado/${idEmpleado}`);
  }
}
