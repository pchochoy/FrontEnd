import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from '../../Model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre!: string;
  porcentaje!: number;

  resultado!: string;

  constructor(
    private skillServ: SkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate():void {
    if (this.formularioSkill.valid) {
      this.resultado = "Todos los datos son válidos";
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillServ.save(skill).subscribe(
      data=> {
        alert("Skill creado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló al crear skill");
        this.router.navigate(['']);
      }
    ) }else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  formularioSkill = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    porcentaje: new FormControl('', [Validators.required, Validators.min(5), Validators.max(100)]),
  });

}
