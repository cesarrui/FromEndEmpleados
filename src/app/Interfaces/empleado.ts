export interface Empleado {
    idEmpleado: number,

    idDocumento: number,
    nombreDocumento?: string

    numeroDocumento: string,
    nombre: string,
    apellido: string,

    idPais: number,
    nombrePais?: string,

    idArea: number,
    nombreArea?: string,

    idSubArea: number,
    nombreSubArea?: string,
    estado: string,

    fechaContratacion: Date
}
