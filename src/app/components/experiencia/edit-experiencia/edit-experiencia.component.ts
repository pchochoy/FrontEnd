import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ImageService } from 'src/app/services/image.service';
import { Experiencia } from '../../Experiencia';
import { MExperiencia } from '../../Model/m-experiencia';


@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  experiencia : Experiencia = null;
  namefoto = "";
  resultado!: string;
 
  constructor(
    private expserv: ExperienciaService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService
    ) { }

  ngOnInit(): void {
    console.log("estor en la funcion ngOnInit() de edit-experiencia");
    const id = this.activatedRouter.snapshot.params['id'];
    console.log("estor en la funcion ngOnInit() de edit-experiencia" + id);
    this.expserv.detail(id).subscribe(
      data => {
        this.experiencia = data;
        this.imageService.url = this.experiencia.logo;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    if (this.formularioNuevaExperiencia.valid) {
      this.resultado = "Todos los datos son válidos";
    console.log("Estoy en el opUpdate() de edit-experiencia " + this.experiencia.id + " " + this.experiencia.empresa)
    const id = this.activatedRouter.snapshot.params['id'];
    this.experiencia.logo=this.imageService.url;
    this.expserv.update(id, this.experiencia).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modifica experiencia");
        this.router.navigate(['']);
      }
    )
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
    this.imageService.uploadImage($event, this.namefoto);
  }
}
