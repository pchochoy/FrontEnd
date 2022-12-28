import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../components/Model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //private apiUrl = environment.URL;
  //private apiUrl = 'https://backendporf.herokuapp.com/';
  private apiUrl = 'https://deploy-springboot1.fly.dev/';

  constructor(
    private http: HttpClient
  ) { }

  public getHySs() : Observable<Skill[]> { 
    console.log("estoy en getHySs() del Servicio de Skill")
    return this.http.get<Skill[]>(this.apiUrl + "buscar/hyss");
  }

  public deleteHyS(skill: Skill) : Observable<Skill> {
    console.log("Estoy en deleteHyS:" + skill.id);
    const url =  `${this.apiUrl+`borrar/hys`}/${skill.id}`;
    return this.http.delete<Skill>(url);
  }

  public save(skill: Skill): Observable<any> {
    console.log("Estoy en save de skill.service")
    return this.http.post<any>(this.apiUrl + `crear/hys`, skill);
  }

  public update(id: number, skill : Skill): Observable<any> {
    return this.http.post<any>(this.apiUrl + `actualizar/hys`, skill)
  }
 
  public detail(id: number): Observable<any> {
    return this.http.get<Skill>(this.apiUrl+`buscar/hysxid/${id}`)
  }
}
