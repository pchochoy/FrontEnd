import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Persona } from '../Persona';
import { EncabezadoService } from 'src/app/services/encabezado.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miPorfolio: any;
  showAddTask : boolean = false;
  subscription! : Subscription;
  faTimes = faTimes;
  faEdit = faEdit;
  persona!: Persona;

  constructor(
    private datosPorfolio: PorfolioService,
    private uiService:UiService,
    private router: Router,
    private perServicio: EncabezadoService,
    private tokenService: TokenService
  ) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value )
  }

  isLogged = false;

  ngOnInit(): void {
    /*
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data),
      this.miPorfolio=data;
    });
    */

    this.leoDatosPersona(1);

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  toggleAddTask() {
    console.log("toggleAddTask() se hizo clic");
    this.uiService.toogleAddTask();
  }

  hasRouter(route: String) {
    return this.router.url === route;
  }

  leoDatosPersona(id: number) {
    console.log("Estoy en leoDatosPersona con id " + id )
    this.perServicio.getPersonaxId(id).subscribe(data=> {
      this.miPorfolio=data;
    });
  }

  onUpdateInfo(persona:Persona):void {
    console.log("Estoy en onUpdateInfo para actualizar la persona " + persona.id + persona.info)
    this.perServicio.updatePersonaInfo(persona).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar Información Profesional");
        this.router.navigate(['']);
      }
    )
  }
}
