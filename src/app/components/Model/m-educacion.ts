export class MEducacion {
    id?: number;
    instituto: String;
    anio: number;
    titulo: String;
    logo: String;

    constructor(instituto: String, anio: number, titulo:String, logo:String) {
        this.instituto =  instituto;
        this.anio = anio;
        this.titulo = titulo;
        this.logo = logo;
    }
}