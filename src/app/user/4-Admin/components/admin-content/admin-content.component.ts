import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CourseService } from '@rutas/course/services/curso.service';
import { ErrorService } from '@rutas/shared/services/error.service';
import { PersonService } from '@rutas/shared/services/persona.service';
import { Person } from '@rutas/user/shared/interfaces/persona';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent {

  constructor(private _personaService:PersonService, private _errorService:ErrorService, private toastr:ToastrService, private _courseService:CourseService){}

  esActivo: boolean = true;
  estadoTitulo:string = "Activar "

  editUser:boolean = false;

  rolUsuario:any;

  numberUser:number;
  numberCourse:number;

  estadoNuevo:string = "Desactivado"

  aprendices:number = 0;
  docentes:number = 0;
  visitantes:number = 0;

  nombreUsuario:string="";
  correoUsuario:string="";
  passwUser:string="";
  nuevoRolUsuario:string="";

  persona:Person = {
    nombre: "",
    email: "",
    password: "",
    estado: false
  }

  fechaActual:any;
  
  ngOnInit(): void {

    this.persona.password = this.generarContraseñaSegura(16);

    this._personaService.getPeople().subscribe({
      next: (personas) => {
        console.log(personas);
        if (Array.isArray(personas.listPerson)) {
          this.numberUser = personas.listPerson.length;
          personas.listPerson.forEach(persona => {
            persona.user.forEach(rol => {
              switch (rol.rol.cargo) {
                case 'Aprendiz':
                  this.aprendices++;
                  break;
                case 'Docente':
                  this.docentes++;
                  break;
                case 'Visitante':
                  this.visitantes++;
                  break;
              }
            });
          });
    
        }
      }
    });

    this._courseService.getAllCursos().subscribe({
      next:(cursos) => {
        this.numberCourse = cursos.length;
      }
    });


  }

  obtenerFechaActual(): string {
    const hoy = new Date();
    const año = hoy.getFullYear();
    // Los meses en JavaScript son base 0, por lo tanto, sumamos 1.
    const mes = hoy.getMonth() + 1;
    const día = hoy.getDate();
  
    // Formateamos la fecha a 'aaaa-mm-dd'
    // Usamos 'padStart(2, '0')' para asegurarnos de tener dos dígitos en el día y mes.
    return `${año}-${mes.toString().padStart(2, '0')}-${día.toString().padStart(2, '0')}`;
  }

  generarContraseñaSegura(longitud: number = 12): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=';
    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres.charAt(indiceAleatorio);
    }
    return contraseña;
  }

  titulo_boton = "Edit";
  isEdit = true;

  filaSeleccionada: any = null;
  indexSeleccionado: number = -1; 

  dash = true;
  user = false;
  course = false;
  report = false;
  deleteUser = false;
  newUser = false;
  nameUser = "";
  emailUser = "";
  eleccion: string | null = null;
  Rol: string | undefined;
  Estado: string | undefined;
  Text: string | undefined;

  activo: boolean | undefined;

  datosFiltrados: any[] = [];

  isSelect: { [key: string]: string } = {
    "background-color": "#e0e0e058",
    "cursor": "pointer",
    "font-weight": "700"
  }

  isNotSelect: { [key: string]: string } = {
    "background-color": "transparent",
    "cursor": "pointer",
    "font-weight": "700"
  }

  edit: { [key: string]: string } = {
    "position": "relative",
    "display": "flex",
    "align-items": "center",
    "justify-content": "flex-start",
    "width": "100px",
    "height": "40px",
    "border": "none",
    "padding": "0px 20px",
    "background-color": "#2E95B6",
    "cursor": "pointer",
    "border-radius": "10px",
    "box-shadow": "5px 5px 0px rgb(23, 110, 180)",
    "transition-duration": ".3s"
  }

  delet: { [key: string]: string } = {
    "position": "relative",
    "display": "flex",
    "align-items": "center",
    "justify-content": "flex-start",
    "width": "100px",
    "height": "40px",
    "border": "none",
    "padding": "0px 20px",
    "background-color": "#b62e2e",
    "cursor": "pointer",
    "border-radius": "10px",
    "box-shadow": "5px 5px 0px rgb(180, 23, 23)",
    "transition-duration": ".3s"
  }

  rows = [
    { isSelected: false, isEdit: true },
    // Agrega más objetos según la cantidad de filas que desees
  ];
  
  checkDelete(index: number, row:any) {
    this.rows[index].isEdit = !this.rows[index].isEdit;
    row.index = index;
  }

  busqueda(){

    if((this.Estado !== (null || undefined)) && (this.Rol !== (null || undefined)) && (this.Text !== (null || undefined))){
      
    }

    if( (this.Estado !== (null || undefined)) && (this.Rol !== (null || undefined)) ){

    }

    if( (this.Estado !== (null || undefined)) && (this.Text !== (null || undefined))){

    }


    if( (this.Rol !== (null || undefined)) && (this.Text !== (null || undefined))){
      
    }


    if(this.Estado !== (null || undefined) ){

      if(this.Estado === "Activo"){
        this.activo = true;
      }else{
        this.activo = false;
      }

      this._personaService.getStatus(this.activo).subscribe({
        next: (data) => {
          
          this.borrarCampos();

          this.datosFiltrados = data.map((item:any) => {
            const persona:any = item; // Obtener la propiedad persona
            const rol = item.user && item.user.length > 0 ? item.user[0].rol.cargo : undefined;
          
            return {
              nombre: persona.nombre,
              rol: rol,
              email: persona.email,
              fecha_registro: persona.fecha_registro,
              estado: persona.estado
            };
          });

          this.rows = this.datosFiltrados.map(() => ({ isSelected: false, isEdit: true }));

        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        } 
      });

    }

    if(this.Rol !== (null || undefined)){
      
      this._personaService.getRoles(this.Rol).subscribe({
        next: (data) => {

          this.borrarCampos();

          this.datosFiltrados = data.map((item:any) => {
            const persona = item.persona; // Obtener la propiedad persona
            const rol = item.rol?.cargo; // Obtener el cargo del rol si existe, de lo contrario, será undefined
          
            return {
              nombre: persona.nombre,
              rol: rol,
              email: persona.email,
              fecha_registro: persona.fecha_registro,
              estado: persona.estado
            };
          });

        this.rows = this.datosFiltrados.map(() => ({ isSelected: false, isEdit: true }));

        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        } 
      });

    }

    if(this.Text !== (null || undefined) ){
      
      this._personaService.getName(this.Text).subscribe({
        next: (data) => {

          this.borrarCampos();

          this.datosFiltrados = data.map((item:any) => {
            const persona = item; // Obtener la propiedad persona
            const rol = item.user && item.user.length > 0 ? item.user[0].rol.cargo : undefined;
          
            return {
              nombre: persona.nombre,
              rol: rol,
              email: persona.email,
              fecha_registro: persona.fecha_registro,
              estado: persona.estado
            };
          });

        this.rows = this.datosFiltrados.map(() => ({ isSelected: false, isEdit: true }));

        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        } 
      });

    }
    
  }

  editarFila(index: number) {
    const usuarioSeleccionado = this.datosFiltrados[index];
    this.nameUser = usuarioSeleccionado.nombre;
    this.emailUser = usuarioSeleccionado.email;
    this.rolUsuario = usuarioSeleccionado.rol;

    this.nombreUsuario= this.nameUser;
    this.correoUsuario= this.emailUser;
    this.nuevoRolUsuario=this.rolUsuario;

    if(usuarioSeleccionado.estado){
      this.esActivo = false;
      this.estadoTitulo = "Desactivar ";
    }else {
      this.esActivo = true;
      this.estadoTitulo = "Activar ";
    }
  
    this.editUser = true;
  }

  close(){
    this.editUser = false;
    this.borrarCampos();
  }

  eliminarFila(row: any, index: number) {
    this.deleteUser = true;
    this.filaSeleccionada = row;
    this.indexSeleccionado = index;
  }

  borrarCampos(){
    this.Rol= "" || undefined;
    this.Estado = "" || undefined;
    this.Text = "" || undefined;
    this.nameUser = "" || undefined;
    this.emailUser = "" || undefined;
    this.rolUsuario = "" || undefined;
  }

  new_User(){
    this.newUser = true;
  }

  close_NewUser(){
    this.newUser = false;
  }

  goodCreate(){
    if(this.nameUser === "" || this.emailUser === "" || (this.eleccion === "" || this.estadoNuevo === null)){
      this.toastr.error("Completar todos los campos ", "Error ");
      return;
    }

  // Clonamos el objeto persona para evitar la reutilización del mismo objeto
  let newPersona = { ...this.persona };

  newPersona.nombre = this.nameUser;
  newPersona.email = this.emailUser;
  newPersona.rol = this.eleccion;

  this.fechaActual = this.obtenerFechaActual();

  console.log(this.fechaActual);

  if (this.estadoNuevo == "Activo") {
    newPersona.estado = true;
  } else {
    newPersona.estado = false;
  }

    Swal.fire({
      title: '¿Estás seguro eliminar?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this._personaService.signIn(newPersona).subscribe({
          next: () => {
            
            this.toastr.success("Usuario creado exitosamente");
            this.newUser = false;
  
            // Asegúrate de usar el nuevo objeto persona aquí también
            newPersona.fecha_registro = this.fechaActual;
  
            this.datosFiltrados.push(newPersona);
            this.rows.push({ isSelected: false, isEdit: true });
            
          }
        });
        
      }
    });

  }

  dashboard(){
    this.dash = true;
    this.user = false;
    this.course = false;
    this.report = false;
  }

  userDash(){
    this.user = true;
    this.dash = false;
    this.course = false;
    this.report = false;
  }

  aceptar() {
    if (this.indexSeleccionado !== -1) {
      // Realiza la eliminación
      this.datosFiltrados.splice(this.indexSeleccionado, 1);
      this.rows.splice(this.indexSeleccionado, 1);
      this.toastr.success("Usuario eliminado exitosamente");
    }
    this.deleteUser = false;
    this.filaSeleccionada = null;
    this.indexSeleccionado = -1; // Resetear el índice
  }
  
  cancelar() {
    this.deleteUser = false;
    this.filaSeleccionada = null;
    this.indexSeleccionado = -1; // Posiblemente quieras resetear también aquí
  }

  personaEstado(name:string){
    this.persona.nombre = name;
    console.log(this.persona);
    this._personaService.changeStatus(this.persona).subscribe({
      next:(estado)=>{
        this.toastr.success(estado.msg, "Exitoso");

        const index = this.datosFiltrados.findIndex((persona) => persona.nombre === name);
        if (index !== -1) {
          this.datosFiltrados[index].estado = !this.datosFiltrados[index].estado; // Alternar estado si es booleano, ajusta según necesidad
        }

        this.editUser = false;
        this.borrarCampos();
      },
      error:(e: HttpErrorResponse) => {
        this._errorService.msgError(e);
      }
    });
  }

  newPassword(){
    this.passwUser = this.generarContraseñaSegura(16);
  }

  actualizarPersona() {
    // Asignaciones previas
    if (this.esActivo) {
      this.persona.estado = false;
    } else {
      this.persona.estado = true;
    }
  
    if (this.passwUser) {
      this.persona.password = this.passwUser;
    } else {
      this.persona.password = "";
    }
  
    if (this.nombreUsuario !== this.nameUser) {
      this.persona.nombre = this.nameUser;
    } else {
      this.persona.nombre = this.nombreUsuario; 
    }
  
    if (this.correoUsuario !== this.emailUser) {
      this.persona.email = this.emailUser;
    } else {
      this.persona.email = ""; 
    }
  
    if (this.nuevoRolUsuario !== this.rolUsuario) {
      this.persona.rol = this.rolUsuario;
    } else {
      this.persona.rol = ""; 
    }
  
    // Validación de que al menos uno de los campos además de `estado` no esté vacío
    if (this.persona.nombre || this.persona.email || this.persona.password || this.persona.rol) {
      this._personaService.updatePerson(this.persona).subscribe({
        next:(personas) => {
          this.toastr.success(personas.msg, "Exitoso");
          this.editUser = false;
        }
      });
    }
  }

}
