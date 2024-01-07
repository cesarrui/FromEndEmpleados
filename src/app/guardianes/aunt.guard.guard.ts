import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuntGuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Verifica si el usuario está autenticado recuperando la información del LocalStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
      // El usuario está autenticado
      return true;
    } else {
      // El usuario no está autenticado, redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
