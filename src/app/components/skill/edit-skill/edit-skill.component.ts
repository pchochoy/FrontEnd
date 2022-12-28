import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from '../../Model/skill';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = null;
  resultado!: string;

  constructor(
    private skillServ: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillServ.detail(id).subscribe(
      data=>{
        this.skill = data;
      }, err=> {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() {
    if (this.formularioSkill.valid) {
      this.resultado = "Todos los datos son válidos";
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillServ.update(id, this.skill).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )} else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  formularioSkill = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    porcentaje: new FormControl('', [Validators.required, Validators.min(5), Validators.max(100)]),
  });

}
