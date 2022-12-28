import { Injectable } from '@angular/core';
import { Curso } from '../components/Curso';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  //private apiUrl = 'http://localhost:5000/cursos';
  //private apiUrl = 'http://localhost:8080/';
  //private apiUrl = environment.URL;
  //private apiUrl = 'https://backendporf.herokuapp.com/';
  private apiUrl = 'https://deploy-springboot1.fly.dev/';
  

  constructor(
    private http: HttpClient
  ) { }

  deleteCurso(curso: Curso) : Observable<Curso> {
    console.log("Estoy en deleteExperiencia:" + curso.id);
    const url =  `${this.apiUrl+`borrar/curso`}/${curso.id}`;
    return this.http.delete<Curso>(url);
  }
/*
  deleteCurso(curso: Curso) : Observable<Curso> {
    console.log("Estoy en deleteCurso:" + curso.id);
    const url =  `${this.apiUrl}/${curso.id}`;
    return this.http.delete<Curso>(url);
  }
  */
/*
  getCursos() : Observable<Curso[]> { 
    console.log("estoy en getCursos")
    return this.http.get<Curso[]>(this.apiUrl);
  }
*/

  getCursos() : Observable<Curso[]> { 
    console.log("estoy en getCurso del Servicio de Cursos")
    return this.http.get<Curso[]>(this.apiUrl + "buscar/cursos");
  }

  public save(curso: Curso): Observable<any> {
    console.log("Estoy en save de curso.service")
    return this.http.post<any>(this.apiUrl + `crear/curso`, curso);
  }

  public update(id: number, curso : Curso): Observable<any> {
    return this.http.post<any>(this.apiUrl + `actualizar/curso`, curso)
  }

  public detail(id: number): Observable<any> {
    return this.http.get<Curso>(this.apiUrl+`buscar/cursoxid/${id}`)
  }
}
