import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from '../Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  miPorfolio: any;
  showAddTask : boolean = false;
  subscription! : Subscription;
  faEdit = faEdit;
  faTimes = faTimes
  experiencias : Experiencia[] = [];

  constructor(
    private datosPorfolio: PorfolioService,
    private uiService:UiService,
    private router: Router,
    private experServicio: ExperienciaService,
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
    
    this.leoDatosExperiencia();

    if(this.tokenService.getToken()) {
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

  leoDatosExperiencia() {
    console.log("Estoy dento de leoDatosExperiencia()")
    this.experServicio.getExperiencias().subscribe(data => {
      this.miPorfolio=data;
    });
  }

  onDelete(experiencia: Experiencia) {
    console.log("Se hizo clic en delete", experiencia);
    this.deleteRegistro(experiencia);
    this.leoDatosExperiencia();
  }
/*
  deleteRegistro(experiencia: Experiencia) {
    this.experServicio.deleteExperiencia(experiencia)
      .subscribe(()=>[
        this.experiencias = this.experiencias.filter(t => t.id !== experiencia.id)
      ])
    }
*/
    deleteRegistro(experiencia: Experiencia) {
      this.experServicio.deleteExperiencia(experiencia).subscribe(
        data => {
          this.leoDatosExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
      }

    irNuevaE() {
      console.log("Estoy en funcion irNuevaE()")
      this.router.navigate(['/nuevaexp']);
    }
/*
    irActualizar(experiencia: Experiencia) {
      console.log("Estoy en funcion irNuevaE() " + experiencia.id + " " + experiencia.empresa);
      //this.router.navigate(['/editexp/'],${experiencia.id});
      const url =  `${'/editexp/'}/${experiencia.id}`;
      this.router.navigate(['url']);
    }
*/
}
