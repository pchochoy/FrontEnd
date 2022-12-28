import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
/*
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionServicio:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentUser = this.autenticacionServicio.UsuarioAutenticado;
    
    if(currentUser && currentUser.accesToken)
    {
      req = req.clone({
        setHeaders:{
          Authorization:`Bearer ${currentUser.accesToken}`
        }
      })
    }
    console.log("Interceptor está corriendo " + JSON.stringify(currentUser));
    return next.handle(req);
  }
}
*/
export class InterceptorService {
  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let inReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      inReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + token)
      })
    }
    return next.handle(inReq);
  }
}

export const interceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true
}];