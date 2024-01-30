export interface Course {
    id_curso?: number,
    nombre: string;
    descripcion: string;
    id_persona?: number;
    objetivos: Objetivo[];
    video_presentacion: string;
    portada?: string;
    publicado?: boolean;
}

export interface Objetivo {
    descripcion: string;
}

export interface Competencia {
    nombre: string;
}