import { Persona } from "../Persona";

export class MPersona implements Persona {
    id?: number | undefined;
    nomapel: String;
    trabajo: String;
    info: String;
    logoperfil: String;
    logobaner: String;

    constructor(nomapel: String, trabajo: String, info:String, logoperfil:String, logobaner:String) {
        this.nomapel = nomapel;
        this.trabajo = trabajo;
        this.info = info;
        this.logoperfil = logoperfil;
        this.logobaner = logobaner;
    }
}
