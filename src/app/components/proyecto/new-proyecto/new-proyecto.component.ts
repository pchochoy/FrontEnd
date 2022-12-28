import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { MProyecto } from '../../Model/m-proyecto';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombre: String = "";
  anio!: number;
  descripcion: String = "";
  link: String = "";

  resultado!: string;

  constructor(
    private provServ: ProyectoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate():void {
    if (this.formularioNuevoProyecto.valid) {
      this.resultado = "Todos los datos son válidos";
   const proyecto = new MProyecto(this.nombre, this.anio, this.descripcion, this.link);
   this.provServ.save(proyecto).subscribe(data=> {
    alert("Proyecto añadido");
    this.router.navigate(['']);
   }, err=>{
    alert("Falló");
    this.router.navigate(['']);
   })}else{
    this.resultado = "Hay datos inválidos en el formulario";
   }
  }

  formularioNuevoProyecto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    anio: new FormControl('', [Validators.required, Validators.minLength(4), Validators.min(1980), Validators.max(2100)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

}
