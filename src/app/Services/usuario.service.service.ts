import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  isLoggedIn: boolean = false;
  private endPoint: string = environment.endPoint1;

  constructor(private http:HttpClient) { }

  verificarUsuario(usuario: Usuario): Observable<number> {
    return this.http.post<number>(`${this.endPoint}VerificarUsuario`, usuario);
  }
  
  cerrarSesion() {
    // Elimina la información del usuario del LocalStorage al cerrar sesión
    localStorage.removeItem('usuario');
    this.isLoggedIn = false;
  }
  
}
