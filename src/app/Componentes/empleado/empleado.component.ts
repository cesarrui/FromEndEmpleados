
import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import{MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Interfaces/empleado';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import { DialogAgregarEditarEmpleadosComponent } from '../dialog-agregar-editar-empleados/dialog-agregar-editar-empleados.component';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  displayedColumns: string[] = ['TipoDocumento', 'Documento', 'Nombre', 'Apellido','FechaContratacion','Pais','Area','Subarea','Estado','Acciones'];
  dataSource = new MatTableDataSource<Empleado>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _empleadoServicio: EmpleadoService,
    public dialog: MatDialog,
    private _snackBar:MatSnackBar,
    private router:Router){

  }

  ngOnInit(): void {
    this.mostrarEmpleados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  mostrarEmpleados(){
    this._empleadoServicio.getList().subscribe({
      next:(dataResponse:any)=>{
        console.log(dataResponse);
        this.dataSource.data = dataResponse;
      },error:(e)=>{}
    })
  }

  openDialog() {
    this.dialog.open(DialogAgregarEditarEmpleadosComponent,{
      disableClose:true,
      width:"350px"
    }).afterClosed().subscribe(resultado=>{
      if(resultado==="creado"){
        this.mostrarEmpleados();
      }
    })
  }

  dialogoEditarEmpleado(dataEmpleado:Empleado){
    this.dialog.open(DialogAgregarEditarEmpleadosComponent,{
      disableClose:true,
      width:"350px",
      data: dataEmpleado
    }).afterClosed().subscribe(resultado =>{
      if(resultado == "editado"){
        this.mostrarEmpleados();
      }
    })
  }

  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }

}
