import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormArray, FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Hito, Line } from '@rutas/course/interfaces/recurso';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '@rutas/course/services/recurso.service';

@Component({
  selector: 'app-resource-time-line',
  templateUrl: './resource-time-line.component.html',
  styleUrls: ['./resource-time-line.component.css']
})
export class ResourceTimeLineComponent {

  titulo:string = ""

  forma: FormGroup;
  disableGuardar:boolean=false;
  disableHito:boolean=false;
  disableAgregarHito:boolean=false;
  fotoSeleccionada: File;
  idLine:number;

  linea: Line = {
    id_modulo:0,
    recurso:"", 
    nombre:""
  }

  milestones: Hito[] = [];

  constructor(private fb: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private _lineService:ResourceService){
    this.crearFormulario();
  }

  ngOnInit() {
    const {id}= this.activatedRoute.snapshot.params;
    this.linea.id_modulo = id;
  }

  crearFormulario(){
    this.forma= this.fb.group({
      nombre:   ['', [Validators.required]],

      hitos: this.fb.array([]),
    }as FormControlOptions);
  }

  //validaciones
  isValido(param: any){
    return this.forma.get(param).invalid && this.forma.get(param).touched;
  }

  isValidoHitos(index: number, param:string){
    return this.hitos.at(index).get(param).invalid && this.hitos.at(index).get(param).touched;
  }

  get hitos(): FormArray{
    return this.forma.get('hitos') as FormArray;
  }

  agregarHito(){
    this.disableHito = true;
    this.hitos.push(this.fb.group({
      tituloHito: ['',[Validators.required]],
      dateHito: ['',[Validators.required]],
      desc: ['',[Validators.required]],
      img:[''],
      link:['']
    })

    
    );
    this.desactivarBotones();
  }

  private desactivarBotones() {
    this.disableAgregarHito = this.hitos.length >=8;
    this.disableGuardar = this.hitos.length >= 4;
  }

  borrarHito(index: number) {
    this.hitos.removeAt(index);
    this.desactivarBotones();
    if(index === 0){
      this.disableHito = false;
    }
  }

  seleccionarFoto(event){
    this.fotoSeleccionada= event.target.files[0];
    //this.progreso=0;

    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error seleccionar imagen: ', 'El archivo debe ser de tipo imagen','error');
      this.fotoSeleccionada=null;
    }
  }

  guardar() {

    if (this.forma.invalid) {
      // Marca todos los controles como tocados para mostrar validaciones
      Object.values(this.forma.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
      return;
    }

    this.linea.nombre = this.forma.get('nombre').value;
    this.linea.recurso = "Linea del tiempo";

    console.log(this.linea);

    this._lineService.postLine(this.linea).subscribe({
      next: (timeline) => {
        console.log(timeline.linea.id_linea_tiempo);
        this.idLine = timeline.linea.id_linea_tiempo;

        if (Array.isArray(this.forma.value.hitos) && this.forma.value.hitos.length) {
          // Iterar sobre cada hito del formulario
          this.forma.value.hitos.forEach((hitoForm:any) => {
            // Crear la estructura de Hito esperada
            const hito: Hito = {
              id_linea_tiempo: this.idLine, 
              titulo: hitoForm.tituloHito,
              descripcion: hitoForm.desc,
              imagen: hitoForm.img,
              archivo: "",
              enlace: hitoForm.link,
              fecha: hitoForm.dateHito
            };
        
            // Llamar al servicio para crear el hito
            this._lineService.postHito(hito).subscribe({
              next: (response) => {
                console.log(response);
                // Aquí puedes manejar la respuesta, por ejemplo, mostrando un mensaje de éxito
              },
              error: (error) => {
                console.error(error);
                // Aquí puedes manejar errores, por ejemplo, mostrando un mensaje de error
              }
            });
          });
        } 

      }
    });
    
  }

}
