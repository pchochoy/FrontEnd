import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
import { Skill } from '../Model/skill';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: Skill[] = [];
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private skillServ: SkillService, 
    private tokenService: TokenService
    ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills():void {
    this.skillServ.getHySs().subscribe(data=> {
      this.skill = data;
    })
  }

  delete(skill: Skill) {
    this.skillServ.deleteHyS(skill).subscribe(
      data=> {
        this.cargarSkills();
      }, err => {
        alert("No se pudo borrar skill.")
      }
    )
  }

}
