import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/Services/usuario.service.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor(private _usuarioSerivice: UsuarioServiceService,
    private router: Router) { }
  cerrarsesion(){
    this._usuarioSerivice.cerrarSesion();
    this.router.navigate(['/login']);

  }
  ngOnInit(): void {
  }

}
