import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { ImageService } from 'src/app/services/image.service';
import { Curso } from '../../Curso';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  curso: Curso = null;
  namefoto = "";
  resultado!: string;

  constructor(
    private cursoServ: CursoService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursoServ.detail(id).subscribe(
      data => {
        this.curso = data;
        console.log("El curso a modificar es " + this.curso.instituto + " logo " + this.curso.logo)
        this.imageService.url = this.curso.logo;
      }, err => {
        alert("Error al modificar curso");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    if (this.formularioNuevoCurso.valid) {
      this.resultado = "Todos los datos son válidos";
    const id = this.activatedRouter.snapshot.params['id'];
    this.curso.logo=this.imageService.url;
    this.cursoServ.update(id, this.curso).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modifica curso");
        this.router.navigate(['']);
      }
    ) } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  formularioNuevoCurso = new FormGroup({
    instituto: new FormControl('', [Validators.required, Validators.minLength(5)]),
    anio: new FormControl('', [Validators.required, Validators.minLength(4), Validators.min(1980), Validators.max(2100)]),
    titulo: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  uploadImage($event: any){
    let id = this.activatedRouter.snapshot.params['titulo'];
    const numero = (Math.random()*10+1);
    this.namefoto = "curso_" + numero;
    this.imageService.uploadImage($event, this.namefoto);
  }

}
