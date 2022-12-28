import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { faRupiahSign, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from '../Educacion';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  miPorfolio: any;
  showAddTask : boolean = false;
  subscription! : Subscription;
  faTimes = faTimes;
  faEdit = faEdit;
  educas : Educacion[] = [];

  constructor(
    private datosPorfolio: PorfolioService,
    private uiService:UiService,
    private educaService: EducacionService,
    private router: Router,
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
    this.leoDatosEducacion();

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

  leoDatosEducacion() {
    this.educaService.getEducaciones().subscribe(data => {
      this.miPorfolio=data;
    });
  }

  onDelete(educa: Educacion) {
    console.log("Se hizo clic en delete", educa);
    this.deleteRegistro(educa);

    this.leoDatosEducacion();
  }

  deleteRegistro(educa: Educacion) {
    this.educaService.deleteEducacion(educa)
      .subscribe(()=>[
        this.educas = this.educas.filter(t => t.id !== educa.id)
      ])
    }

    irNuevaE() {
      console.log("Estoy en funcion irNuevaE()")
      this.router.navigate(['/nuevaedu']);
    }
}
