export class MCurso {
    id?: number;
    instituto: String;
    anio: number;
    titulo: String;
    logo: string;

    constructor(instituto: String, anio: number, titulo:String, logo:string) {
        this.instituto =  instituto;
        this.anio = anio;
        this.titulo = titulo;
        this.logo = logo;
    }
}
