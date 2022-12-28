import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { EditCursoComponent } from './components/cursos/edit-curso/edit-curso.component';
import { NewCursoComponent } from './components/cursos/new-curso/new-curso.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditDatosProfesionalComponent } from './components/encabezado/edit-datos-profesional/edit-datos-profesional.component';
import { EditFotoPerfilComponent } from './components/encabezado/edit-foto-perfil/edit-foto-perfil.component';
import { EditInfoProfesionalComponent } from './components/encabezado/edit-info-profesional/edit-info-profesional.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto/new-proyecto.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skill/new-skill/new-skill.component';

const routes: Routes = [
  {path: 'porfolio', component: PorfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevocurso', component: NewCursoComponent},
  {path: 'editcurso/:id', component: EditCursoComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editeduca/:id', component: EditEducacionComponent},
  {path: 'editinfoprof/:id', component: EditInfoProfesionalComponent},
  {path: 'editinfodata/:id', component: EditDatosProfesionalComponent},
  {path: 'editfotoperfil/:id', component: EditFotoPerfilComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'newproyecto', component:NewProyectoComponent},
  {path: 'editproyecto/:id', component:EditProyectoComponent},
  {path: '', redirectTo:'porfolio',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
