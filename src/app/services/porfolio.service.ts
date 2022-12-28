import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../components/Curso';
import { CursoService } from './curso.service';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  //url:String="http://localhost:8080/"
  //url:String="https://backendporf.herokuapp.com/";
  url:String = 'https://deploy-springboot1.fly.dev/';

  private apiUrlC = 'http://localhost:5000/cursos';
  
  private apiUrl = './assets/data/data.json';

  cursos : Curso[] = [];
  
  constructor(
    private http: HttpClient,
  ) { }

  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json');
    
  }

  obtenerDatosPersona():Observable<any> {
    return this.http.get(this.url + "buscar/persona/1");
  }

  obtenerDatosCursos():Observable<any> {
    return this.http.get('http://localhost:5000/cursos');
  }

  deleteCurso(curso: Curso) : Observable<Curso> {
    console.log("estoy en deleteCurso del Servicio")
    const url =  `${this.apiUrlC}/${curso.id}`;
    return this.http.delete<Curso>(url);
  }
}
