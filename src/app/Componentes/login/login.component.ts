import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioServiceService } from 'src/app/Services/usuario.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   // Define un FormGroup para el formulario
   form: FormGroup;

   constructor(
     private _usuarioService: UsuarioServiceService,
     private fb: FormBuilder, // Inyecta FormBuilder
     private router: Router,
     private _snackBar: MatSnackBar,
   ) {
     // Construye el formulario en el constructor
     this.form = this.fb.group({
       usuario: ['', Validators.required],
       clave: ['', Validators.required]
     });
   }

    // Función para manejar la lógica de inicio de sesión
  login() {
    const usuario:Usuario = {
      idUsuario: 0,
      usuario: this.form.value.usuario,
      clave: this.form.value.clave   
    }


    this._usuarioService.verificarUsuario(usuario).subscribe({
      next:(data)=>{
        
        if(data ==1){
          localStorage.setItem('usuario', JSON.stringify(usuario.usuario));
          this.router.navigate(['/']);
          this._usuarioService.isLoggedIn = true;
        }
        else{
          this.mostrarAlerta("Su usuario no fue encontrado","Error");
        }

        return new Observable<number>((observer) => {
          observer.next(data);
          observer.complete();
        });
        
      },error:(e)=>{
        console.log(e);
      }
    }) 
  }
  ngOnInit(): void {
    
  }

  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }

  

}
