import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../components/Persona';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {

  //private apiUrl = 'http://localhost:8080/';
  //private apiUrl = environment.URL;
  //private apiUrl = 'https://backendporf.herokuapp.com/';
  private apiUrl = 'https://deploy-springboot1.fly.dev/';

  constructor(private http: HttpClient) { }

  getPersona() : Observable<Persona> { 
    console.log("estoy en getPersona() del Servicio de Encabezado")
    return this.http.get<Persona>(this.apiUrl + "buscar/persona");
  }

  getPersonaxId(id: number) : Observable<Persona> {
    console.log("Estoy en getPersonaxId en encabezadoService con id " + id)
    return this.http.get<Persona>(this.apiUrl+`buscar/personaxid/${id}`)
  }
  
  public updatePersona(id: number, perso : Persona): Observable<any> {
    return this.http.post<any>(this.apiUrl + `actualizar/persona`, perso)
  }

  deletePersona(perso: Persona) : Observable<Persona> {
    const url =  `${this.apiUrl+`borrar/Persona`}/${perso.id}`;
    return this.http.delete<Persona>(url);
  }

  public updatePersonaInfo(perso : Persona): Observable<any> {
    console.log("Estoy en updatePersonaInfo de encabezado.service.ts");
    perso.info ="";
    return this.http.post<any>(this.apiUrl + `actualizar/persona`, perso)
  }
}
