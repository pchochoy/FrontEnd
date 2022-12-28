import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';
import { MEducacion } from '../../Model/m-educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  instituto: String = "";
  anio!: number;
  titulo: String = "";
  logo: String = "";

  constructor(private eduService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void {
   const educacion = new MEducacion(this.instituto, this.anio, this.titulo, this.logo);
   this.eduService.save(educacion).subscribe(data=> {
    alert("Educación añadida");
    this.router.navigate(['']);
   }, err=>{
    alert("Falló");
    this.router.navigate(['']);
   })
  }
}
