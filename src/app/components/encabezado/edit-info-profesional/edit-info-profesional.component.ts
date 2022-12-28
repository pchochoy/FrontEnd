import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EncabezadoService } from 'src/app/services/encabezado.service';
import { Persona } from '../../Persona';

@Component({
  selector: 'app-edit-info-profesional',
  templateUrl: './edit-info-profesional.component.html',
  styleUrls: ['./edit-info-profesional.component.css']
})
export class EditInfoProfesionalComponent implements OnInit {

  persona: Persona = null;

  resultado!: string;

  constructor(
    private persoServicio: EncabezadoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("estor en la funcion ngOnInit() de edit-info-profesional");
    const id = this.activatedRouter.snapshot.params['id'];
    console.log("estor en la funcion ngOnInit() de edit-persona" + id);
    this.persoServicio.getPersonaxId(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate2InfoProfesional():void {
    if (this.formularioDatosPersonales.valid) {
      this.resultado = "Todos los datos son válidos";
    console.log("Estoy en el onUpdate2InfoProfesional() de edit-info-profesional" + this.persona.id + " " + this.persona.info)
    const id = this.activatedRouter.snapshot.params['id'];
    this.persoServicio.updatePersona(id, this.persona).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modifica persona");
        this.router.navigate(['']);
      }
    )}else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  formularioDatosPersonales = new FormGroup({
    info: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

}
