import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../components/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //private apiUrl = environment.URL;
  //private apiUrl = 'https://backendporf.herokuapp.com/';
  private apiUrl = 'https://deploy-springboot1.fly.dev/';

  constructor(
    private http: HttpClient
  ) { }

  deleteProyecto(proyecto: Proyecto) : Observable<Proyecto> {
    const url =  `${this.apiUrl+`borrar/proyecto`}/${proyecto.id}`;
    return this.http.delete<Proyecto>(url);
  }

  getProyectos() : Observable<Proyecto[]> { 
    return this.http.get<Proyecto[]>(this.apiUrl + "buscar/proyectos");
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.http.post<any>(this.apiUrl + `crear/proyecto`, proyecto);
  }

  public update(id: number, proyecto : Proyecto): Observable<any> {
    return this.http.post<any>(this.apiUrl + `actualizar/proyecto`, proyecto)
  }

  public detail(id: number): Observable<any> {
    return this.http.get<Proyecto>(this.apiUrl+`buscar/proyectoxid/${id}`)
  }
}
