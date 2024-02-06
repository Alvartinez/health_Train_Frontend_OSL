export class Recursos {
    nombre: string='';
}

//Aquí declare todos los otros tipos de recuros que vas a usar

export class RecursoVidPod extends Recursos{
    url: string;
}

export class RecursoTimeLine extends Recursos{

    hitos: hito[];
}

export class hito{
    dateHito:Date;
    desc: string;
    img:File;
    link:string;
}