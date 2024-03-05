export interface Module{
    id_curso?: Number,
    id_modulo?: Number,
    nombre?: string,
    descripcion?:String,
    objetivo?:String,
    conclusion?:String,
    portada?:String,
    creadores?:JSON, 
    competencias?: Competencia[],
    duracion?: Number,
    temas?: Tema[];
}

export interface Competencia {
    nombre: string;
}

export interface Tema {
    nombre: string;
    subtemas?: SubTema[];
}
export interface SubTema {
    nombre: string;
}
  