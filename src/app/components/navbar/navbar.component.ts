import { Component, OnInit, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged = false;

  @Output() btnClick = new EventEmitter();

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut():void{
    console.log("Estoy en funcion onLogOut")
    this.tokenService.logOut();
    console.log("volví de borrar datos de sesion y redirijo la pagina")
    //this.isLogged = false;
    window.location.reload();
    console.log("Terminé de redirigir la pagina");
  }

  onClick() {
    //console.log("Click en Boton");
    //this.btnClick.emit();
  }

  login() {
    console.log("Estoy en funcion login")
    this.router.navigate(['/login']);
  }
}
