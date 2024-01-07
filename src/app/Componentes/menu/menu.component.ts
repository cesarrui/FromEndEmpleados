import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/Services/usuario.service.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 constructor(public _usuarioService: UsuarioServiceService){

 }

  loggedInUser: string | null = null;

  ngOnInit(): void {
    this.inicializarEstado();
  }

  inicializarEstado() {
    // Intenta obtener la variable 'usuario' del localStorage
    const usuarioAlmacenado = localStorage.getItem('usuario');

    if (usuarioAlmacenado) {
      // Si se encuentra, asigna el valor a la propiedad loggedInUser y establece isLoggedIn en true
      this.loggedInUser = JSON.parse(usuarioAlmacenado);
      this._usuarioService.isLoggedIn = true;
    } else {
      // Si no se encuentra, establece isLoggedIn en false
      this._usuarioService.isLoggedIn = false;
    }
  }
}