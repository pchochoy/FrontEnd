import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

export class MExperiencia {

    id?: number; //Cuenado Creamos podría no venir
    empresa: String;
    periodo: String
    tarea: String;
    logo: string;

    constructor(empresa: String, periodo: String, tarea: String, logo: string) {
        this.empresa = empresa;
        this.periodo = periodo;
        this.tarea = tarea;
        this.logo = logo;
    }
    
}
