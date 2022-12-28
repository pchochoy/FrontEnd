import { Component, OnInit } from '@angular/core';
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

  constructor(
    private skillServ: SkillService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  onCreate():void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillServ.save(skill).subscribe(
      data=> {
        alert("Skill creado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló al crear skill");
        this.router.navigate(['']);
      }
    )
  }

}
