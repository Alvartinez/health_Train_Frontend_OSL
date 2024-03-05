export interface Video {
    id_modulo?:number,
    recurso?: string,
    nombre?:string,
    video: string
}

export interface Podcast {
    id_modulo?:number,
    recurso?: string,
    nombre?:string,
    podcast: string
}

export interface Line {
    id_modulo?:number,
    recurso?:string, 
    nombre:string
}

export interface Hito {
    id_linea_tiempo?:number,
    titulo:string,
    descripcion:string,
    imagen?:string,
    archivo?:string,
    enlace?:string,
    fecha:string
}

export interface LineaTiempo {
    linea: Line,
    hitos: Hito[];
}