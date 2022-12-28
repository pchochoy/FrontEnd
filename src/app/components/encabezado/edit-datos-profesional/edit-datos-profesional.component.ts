import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EncabezadoService } from 'src/app/services/encabezado.service';
import { Persona } from '../../Persona';

@Component({
  selector: 'app-edit-datos-profesional',
  templateUrl: './edit-datos-profesional.component.html',
  styleUrls: ['./edit-datos-profesional.component.css']
})
export class EditDatosProfesionalComponent implements OnInit {

  persona: Persona = null;
  resultado!: string;

  constructor(
    private persoServicio: EncabezadoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persoServicio.getPersonaxId(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateDatosPersonales() {
    if (this.formularioDatosPersonales.valid) {
      this.resultado = "Todos los datos son válidos";
    const id = this.activatedRouter.snapshot.params['id'];
    this.persoServicio.updatePersona(id, this.persona).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modifica persona");
        this.router.navigate(['']);
      }
    )
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  formularioDatosPersonales = new FormGroup({
    nomapel: new FormControl('', [Validators.required, Validators.minLength(5)]),
    profesion: new FormControl('', [Validators.required, Validators.minLength(5)]),
    trabajo: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

}
