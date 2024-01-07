import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAgregarEditarEmpleadosComponent } from './dialog-agregar-editar-empleados.component';

describe('DialogAgregarEditarEmpleadosComponent', () => {
  let component: DialogAgregarEditarEmpleadosComponent;
  let fixture: ComponentFixture<DialogAgregarEditarEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAgregarEditarEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAgregarEditarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
