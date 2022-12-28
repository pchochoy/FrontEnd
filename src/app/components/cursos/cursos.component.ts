import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Curso } from '../Curso';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  miPorfolio: any;
  showAddTask : boolean = false;
  subscription! : Subscription;
  faTimes = faTimes;
  faCoffee = faEdit;
  cursos : Curso[] = [];
  pablo : Curso[] = [];
  isLogged = false;
  


  @Output() onDeleteCurso : EventEmitter<Curso> = new EventEmitter();

  constructor(
    private datosPorfolio: PorfolioService,
    private cursoService : CursoService,
    private uiService:UiService,
    private router: Router,
    private tokenService: TokenService
  ) {
    //this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value )
   }

  ngOnInit(): void {
    //Like prmise
    //this.cursoService.getCursos().subscribe((cursos)=>[this.cursos = cursos])
   /*
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log("blabal" + data),
      this.miPorfolio=data;
    });*/
    

    /*
    this.cursoService.getCursos().subscribe(data => {
      this.miPorfolio=data;
    });
    */

    this.leoDatosCursos();

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

  onDelete(curso: Curso) {
    console.log("Se hizo clic en delete", curso);
    this.deleteRegistro(curso);
    this.leoDatosCursos();
  }

  deleteRegistro(curso: Curso) {
    this.cursoService.deleteCurso(curso).subscribe(
      data => {
        this.leoDatosCursos();
      }, err => {
        alert("No se pudo borrar el curso");
      }
    )
    }

  /*
  onDelete(curso: Curso) {
    console.log("Se hizo clic en delete", curso);
    this.deleteTask(curso);

    //Lo siguiente es para Leer los datos ya con el registro eliminado
    this.cursoService.getCursos().subscribe(data => {
      this.miPorfolio=data;
    });
  }
  */

  deleteTask(curso: Curso) {
    this.cursoService.deleteCurso(curso)
      .subscribe(()=>[
        this.cursos = this.cursos.filter(t => t.id !== curso.id)
      ])
    }

  leoDatosCursos() {
      console.log("Estoy dento de leoDatosCursos()")
      this.cursoService.getCursos().subscribe(data=>{
        this.miPorfolio = data;
      })
    }

    irNuevoC() {
      console.log("Estoy en funcion irNuevoC()")
      this.router.navigate(['/nuevocurso']);
    }
}
