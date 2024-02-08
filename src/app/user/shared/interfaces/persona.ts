export type Roles = 'Visitante' | 'Aprendiz' | 'Docente' | 'ADMIN';

export interface Person{
    nombre?: string,
    email?: string,
    password: string,
    estado?: boolean,
    fecha_registro?: Date,
    username?:string
}

export interface personResponse{
    message: string;
    token: string;
    userId: number;
    role: Roles;
}