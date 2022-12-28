import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { ValidacionService } from 'src/app/services/validacion.service';
import { EmailValidator, Form, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validator } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { faLock, faUserLock, faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons';
import { TemplateBindingParseResult } from '@angular/compiler';
import { LoginUsuario } from '../Model/login-usuario';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginDail =  false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  faLock = faUserLock;
  

  //form:FormGroup;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    public router: Router,

    private datosAcceso: ValidacionService,
    private FormBuilder: FormBuilder,
    private autenticacionService : AutenticacionService,
    private ruta:Router
  ) {
    /*
    this.form=this.FormBuilder.group(
      {
        usuario:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        deviveInfo:this.FormBuilder.group(
          {
            deviceIo: ["17867868768"],
            deviceType:["DEVICE_TYPE_ANDROID"],
            notificationToken:["6765757eececc64"]
          }
        )
      }
    )
    */
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data=>{
      this.isLogged = true;
      this.isLogginDail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['/porfolio'])
    }, err =>{
      this.isLogged =false;
      this.isLogginDail=true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
      alert("Usuario y/o Password incorrecta!");
    })
  }
/*
  get Usuario()
  {
    return this.form.get('usuario');
  }

  get Password()
  {
    return this.form.get('password');
  }

  onEnviar(event:Event) 
  {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA PABLO: " + JSON.stringify(data));
      this.ruta.navigate(['/porfolio']);
    })
  }
  */
}
