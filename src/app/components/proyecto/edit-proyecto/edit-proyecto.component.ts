import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../Proyecto';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto: Proyecto = null;

  resultado!: string;

  constructor(
    private provService: ProyectoService,
    private activatedRouter: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.provService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    if (this.formularioNuevoProyecto.valid) {
      this.resultado = "Todos los datos son válidos";
    const id = this.activatedRouter.snapshot.params['id'];
    this.provService.update(id, this.proyecto).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modifica proyecto");
        this.router.navigate(['']);
      }
    )}else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  formularioNuevoProyecto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    anio: new FormControl('', [Validators.required, Validators.minLength(4), Validators.min(1980), Validators.max(2100)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

}
