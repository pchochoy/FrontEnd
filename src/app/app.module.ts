import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { PorfolioService } from './services/porfolio.service';
import { interceptorProvider, InterceptorService } from './servicios/interceptor.service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewCursoComponent } from './components/cursos/new-curso/new-curso.component';
import { EditCursoComponent } from './components/cursos/edit-curso/edit-curso.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { EditInfoProfesionalComponent } from './components/encabezado/edit-info-profesional/edit-info-profesional.component';
import { EditDatosProfesionalComponent } from './components/encabezado/edit-datos-profesional/edit-datos-profesional.component';
import { EditFotoPerfilComponent } from './components/encabezado/edit-foto-perfil/edit-foto-perfil.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { SkillComponent } from './components/skill/skill.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skill/new-skill/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto/new-proyecto.component';


/*
const appRoutes: Routes = [
  {path: 'porfolio', component: PorfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'login',pathMatch:'full'}
]
*/
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    LoginComponent,
    EncabezadoComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    CursosComponent,
    NavbarComponent,
    PorfolioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewCursoComponent,
    EditCursoComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditInfoProfesionalComponent,
    EditDatosProfesionalComponent,
    EditFotoPerfilComponent,
    SkillComponent,
    EditSkillComponent,
    NewSkillComponent,
    ProyectoComponent,
    EditProyectoComponent,
    NewProyectoComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    //RouterModule.forRoot(appRoutes, {enableTracing : true}),
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),

     // Specify ng-circle-progress as an import
     NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [PorfolioService, interceptorProvider,
  {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
