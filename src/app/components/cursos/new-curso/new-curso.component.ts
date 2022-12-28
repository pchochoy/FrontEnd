import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { ImageService } from 'src/app/services/image.service';
import { MCurso } from '../../Model/m-curso';

@Component({
  selector: 'app-new-curso',
  templateUrl: './new-curso.component.html',
  styleUrls: ['./new-curso.component.css']
})
export class NewCursoComponent implements OnInit {

  instituto: String = "";
  anio!: number;
  titulo: String = "";
  logo: string = "";
  namefoto = ""

  resultado!: string;

  constructor(
    private curService: CursoService, 
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate():void {

    if (this.formularioNuevoCurso.valid) {
      this.resultado = "Todos los datos son válidos";
      console.log("Estoy en onCreate() de new-experiencia")
      this.logo = this.imageService.url;
      const curso = new MCurso(this.instituto, this.anio, this.titulo, this.logo);
      this.curService.save(curso).subscribe(data=> {
       alert("Curso añadido");
       this.router.navigate(['']);
       this.imageService.url = "";
      }, err=>{
       alert("Falló");
       this.router.navigate(['']);
      })
    }
    else
      this.resultado = "Hay datos inválidos en el formulario";


    
  }

  volver():void {
    this.router.navigate(['']);
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
    this.imageService.uploadImage($event, this.namefoto)
  }
  
}
