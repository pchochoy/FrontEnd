import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';
import { UiService } from 'src/app/services/ui.service';
import { Proyecto } from '../Proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  faTimes = faTimes;
  faCoffee = faEdit;
  miPorfolio: any;
  proyecto: Proyecto[] = [];
  isLogged = false;


  constructor(
    private proyServ: ProyectoService,
    private router: Router,
    private tokenService: TokenService,
    private uiService:UiService,
  ) { }

  ngOnInit(): void {
    this.leoDatosProyectos();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  hasRouter(route: String) {
    return this.router.url === route;
  }

  onDelete(proyecto: Proyecto) {
    this.deleteRegistro(proyecto);
    this.leoDatosProyectos();
  }

  deleteRegistro(proyecto: Proyecto) {
    this.proyServ.deleteProyecto(proyecto).subscribe(
      data => {
        this.leoDatosProyectos();
      }, err => {
        alert("No se pudo borrar el proyecto");
      }
    )
    }

  leoDatosProyectos() {
      this.proyServ.getProyectos().subscribe(data=>{
        this.miPorfolio = data;
      })
    }

    irNuevoP() {
      this.router.navigate(['/newproyecto']);
    }
}
