import { Injectable } from '@angular/core';
import { Experiencia } from '../components/Experiencia';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //private apiUrl = 'http://localhost:5000/experiencia';
  //private apiUrl = 'http://localhost:8080/';
  //private apiUrl = environment.URL;
  //private apiUrl = 'https://backendporf.herokuapp.com/';
  private apiUrl = 'https://deploy-springboot1.fly.dev/';

  constructor(
    private http: HttpClient
  ) { }

  getExperiencias() : Observable<Experiencia[]> { 
    console.log("estoy en getExperiencias() del Servicio de Experiencias")
    return this.http.get<Experiencia[]>(this.apiUrl + "buscar/experiencias");
  }

  deleteExperiencia(expe: Experiencia) : Observable<Experiencia> {
    console.log("Estoy en deleteExperiencia:" + expe.id);
    const url =  `${this.apiUrl+`borrar/experienciaNuevo`}/${expe.id}`;
    return this.http.delete<Experiencia>(url);
  }

  public save(expe: Experiencia): Observable<any> {
    console.log("Estoy en save de experiencia.service")
    return this.http.post<any>(this.apiUrl + `crear/experienciaNuevo`, expe);
  }

  public update(id: number, expe : Experiencia): Observable<any> {
    return this.http.post<any>(this.apiUrl + `actualizar/experiencia`, expe)
  }
 /*
  public update(id: number, expe : Experiencia): Observable<any> {
    return this.http.put<any>(this.apiUrl + `actualizar/experiencia/${id}`, expe)
  }
  */

  public detail(id: number): Observable<any> {
    return this.http.get<Experiencia>(this.apiUrl+`buscar/experienciasxid/${id}`)
  }
}
