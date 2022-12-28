import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ImageService } from 'src/app/services/image.service';
import { MExperiencia } from '../../Model/m-experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

    empresa: String = "";
    periodo: String = ""
    tarea: String = "";
    logo: string = "";

    resultado!: string;
    namefoto = ""

  constructor(
    private expservice: ExperienciaService, 
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.url = ""
  }

  onCreate(): void {
    if (this.formularioNuevaExperiencia.valid) {
      this.resultado = "Todos los datos son válidos";

      console.log("Estoy en onCreate() de new-experiencia")
      this.logo = this.imageService.url
      const expe = new MExperiencia(this.empresa, this.periodo, this.tarea, this.logo);
      this.expservice.save(expe).subscribe(data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      })
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  formularioNuevaExperiencia = new FormGroup({
    empresa: new FormControl('', [Validators.required, Validators.minLength(5)]),
    periodo: new FormControl('', [Validators.required, Validators.minLength(5)]),
    tarea: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  uploadImage($event: any){
    let id = this.activatedRouter.snapshot.params['titulo'];
    const numero = (Math.random()*10+1);
    this.namefoto = "curso_" + numero;
    this.imageService.uploadImage($event, this.namefoto)
  }

}
