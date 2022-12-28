import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncabezadoService } from 'src/app/services/encabezado.service';
import { ImageService } from 'src/app/services/image.service';
import { Persona } from '../../Persona';

@Component({
  selector: 'app-edit-foto-perfil',
  templateUrl: './edit-foto-perfil.component.html',
  styleUrls: ['./edit-foto-perfil.component.css']
})
export class EditFotoPerfilComponent implements OnInit {

  persona: Persona = null;

  constructor(
    private persoServicio: EncabezadoService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
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

  onUpdateFotoPerfil(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.fotoperfil = this.imageService.url;
    this.persoServicio.updatePersona(id, this.persona).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modifica persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    console.log("Estoy en uploadImage() de edit-foto-perfil " + event)
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
