import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../components/Educacion';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //private apiUrl = 'http://localhost:5000/educacion';
  //private apiUrl = 'http://localhost:8080/';
  //private apiUrl = environment.URL;
  //private apiUrl = 'https://backendporf.herokuapp.com/';
  private apiUrl = 'https://deploy-springboot1.fly.dev/';

  constructor(
    private http: HttpClient
  ) { }

  deleteEducacion(educa: Educacion) : Observable<Educacion> {
    console.log("Estoy en deleteCurso:" + educa.id);
    const url =  `${this.apiUrl+`borrar/estudio`}/${educa.id}`;
    return this.http.delete<Educacion>(url);
  }

  getEducaciones() : Observable<Educacion[]> { 
    return this.http.get<Educacion[]>(this.apiUrl+ "buscar/estudios");
  }

  public save(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.apiUrl + `crear/estudio`, educacion);
  }

  public update(id: number, educacion : Educacion): Observable<any> {
    return this.http.post<any>(this.apiUrl + `actualizar/estudio`, educacion)
  }

  public detail(id: number): Observable<any> {
    return this.http.get<Educacion>(this.apiUrl+`buscar/cursoxid/${id}`)
  }
}
