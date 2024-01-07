import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment';


import { EmpleadoService } from 'src/app/Services/empleado.service';

export const MY_DATE_FORMATS = {
  parse:{
    dateInput:'DD/MM/YYYY'
  },display:{
    dateInput:'DD/MM/YYYY',
    monthYearLabel:'MMMM YYYY',
    dateA11yLabel:'LL',
    monthYearA11yLabel:'MMMM YYYY'
  }
}
import { Area } from 'src/app/Interfaces/area';
import { Documento } from 'src/app/Interfaces/documento';
import { DocumentoService } from 'src/app/Services/documento.service';
import { Empleado } from 'src/app/Interfaces/empleado';
import { AreaService } from 'src/app/Services/area.service';
import { Subarea } from 'src/app/Interfaces/subarea';
import { Pais } from 'src/app/Interfaces/pais';

@Component({
  selector: 'app-dialog-agregar-editar-empleados',
  templateUrl: './dialog-agregar-editar-empleados.component.html',
  styleUrls: ['./dialog-agregar-editar-empleados.component.css']
})
export class DialogAgregarEditarEmpleadosComponent implements OnInit {
  formEmpleado: FormGroup;
  tituloAccion: string="Nuevo";
  botonAccion: string = "Guardar";
  listaDocumentos:Documento[] =[];
  listaPaises: Pais[] = [];
  listaAreas: Area[] = [];
  listasSubAreas: Subarea[] =[];
 
  
  constructor(private dialogoReferencia:MatDialogRef<DialogAgregarEditarEmpleadosComponent>,
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private _documentoServicio: DocumentoService,
    private _areaServicio: AreaService,
    public _empleadoServicio: EmpleadoService,
    @Inject (MAT_DIALOG_DATA) public dataEmpleado:Empleado) 
    { 
      this.formEmpleado = this.fb.group({
        idDocumento: ['', Validators.required],
        numeroDocumento: ['', Validators.required],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        fechaContratacion: ['', Validators.required],
        idPais: ['', Validators.required],
        idArea: ['', Validators.required],
        idSubArea: ['', Validators.required],
        estado: ['']
        
      })

      _documentoServicio.getList().subscribe({
        next:(data:any)=>{
          this.listaDocumentos = data;
        },error:(e)=>{}
      });

      
      _areaServicio.getListPais().subscribe({
        next:(data: any)=>{
          this.listaPaises = data;
        }
      });    
    
    }

    ngOnInit(): void {
      if (this.dataEmpleado) {
       this._empleadoServicio.actualizar = true;
    
        this.formEmpleado.patchValue({
          idDocumento: this.dataEmpleado.idDocumento,
          numeroDocumento: this.dataEmpleado.numeroDocumento,
          nombre: this.dataEmpleado.nombre,
          apellido: this.dataEmpleado.apellido,
          fechaContratacion: this.dataEmpleado.fechaContratacion,
          idPais: this.dataEmpleado.idPais,
          estado: this.dataEmpleado.estado
        });
    
        // Verificar que idArea no sea nulo o indefinido
        if (this.dataEmpleado.idPais != null) {

          this._areaServicio.getListArea(this.dataEmpleado.idPais).subscribe({
            next: (data: any) => {
              this.listaAreas = data;
              this.formEmpleado.patchValue({
                idArea: this.dataEmpleado.idArea,

                
              });
              if (this.dataEmpleado.idArea != null){
                this._areaServicio.getListSubAreaPorArea(this.dataEmpleado.idArea).subscribe({
                  next: (data: any) => {
                    this.listasSubAreas = data;
                    this.formEmpleado.patchValue({
                      idSubArea: this.dataEmpleado.idSubArea,
                    });
                    
                  },
                  error: (error) => {
                    console.error('Error al obtener subáreas:', error);
                  },
                });
        
              
        
              } 
              this.tituloAccion = "Editar";
              this.botonAccion = "Actualizar";

              
            },
            error: (error) => {
              console.error('Error al obtener areas:', error);
            },
          });

        
        }
      }
      else{
        this._empleadoServicio.actualizar = false;
      }
    }
    

  subareas(idArea: any): void {
    this._areaServicio.getListSubAreaPorArea(idArea).subscribe({
      next: (data: any) => {
        this.listasSubAreas = data;
      }
    });
  }

  areas(idPais: any): void {
    this._areaServicio.getListArea(idPais).subscribe({
      next: (data: any) => {
        this.listaAreas = data;
      }
    });
  }

  AgregarEditarEmpleado(){

    const modelo:Empleado = {
      idEmpleado: this.dataEmpleado?this.dataEmpleado.idEmpleado:0,
      idDocumento: this.formEmpleado.value.idDocumento,
      numeroDocumento: this.formEmpleado.value.numeroDocumento,
      nombre: this.formEmpleado.value.nombre,
      apellido: this.formEmpleado.value.apellido,
      fechaContratacion: this.formEmpleado.value.fechaContratacion,
      idPais: this.formEmpleado.value.idPais,
      idArea: this.formEmpleado.value.idArea,
      idSubArea: this.formEmpleado.value.idSubArea,
      estado: this.formEmpleado.value.estado
      
    }

    if(this.dataEmpleado == null){

      this._empleadoServicio.add(modelo).subscribe({
        next:(data)=>{
          this.mostrarAlerta("Empleado creado","Listo");
          this.dialogoReferencia.close("creado");
        },error:(e)=>{
          console.log(e);
          this.mostrarAlerta("No se pudo crear","Error");
        }
      }) 

    }else{
      this._empleadoServicio.update(modelo).subscribe({
        next:(data)=>{
          this.mostrarAlerta("Empleado actualizado", "Listo");
          this.dialogoReferencia.close("editado");

        },error:(e)=>{
          this.mostrarAlerta("No se pudo editar","Error");
        }
      })
      
    }
      
  }

  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }


}
