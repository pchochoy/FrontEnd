export class MProyecto {
    id?: number;
    nombre: String;
    anio: number;
    descripcion: String;
    link: String;

    constructor(nombre: String, anio: number, descripcion:String, link:String) {
        this.nombre =  nombre;
        this.anio = anio;
        this.descripcion = descripcion;
        this.link = link;
    }
}
