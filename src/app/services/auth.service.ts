import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../components/Model/nuevo-usuario';
import { LoginUsuario } from '../components/Model/login-usuario';
import { JwtDto } from '../components/Model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = 'http://localhost:8080/auth/';
  //authURL = "localhost:8080/auth/";

  //authURL = 'https://backendporf.herokuapp.com/auth/';
  authURL = 'https://deploy-springboot1.fly.dev/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario):Observable<JwtDto> {
    console.log("loginUsuario" + loginUsuario.nombreUsuario + " password " + loginUsuario.password)
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);

  }

}
