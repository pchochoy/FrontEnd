import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from '../../Educacion';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(
    private eduService: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduService.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduService.update(id, this.educacion).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modifica educación");
        this.router.navigate(['']);
      }
    )
  }

}
