import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEstudianteComponent } from './estudiantes/crear-estudiante/crear-estudiante.component';
import { ListadoEstudianteComponent } from './estudiantes/listado-estudiante/listado-estudiante-component';
import { ListadoProfesorComponent } from './profesores/listado-profesor/listado-profesor.component';
import { CrearProfesorComponent } from './profesores/crear-profesor/crear-profesor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ListadoCursosComponent } from './cursos/listado-cursos/listado-cursos.component';
import { EditarCursoComponent } from './cursos/editar-curso/editar-curso.component';
import { CrearCursoComponent } from './cursos/crear-curso/crear-curso.component'; 
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ListadoMateriasComponent } from './materias/listado-materias/listado-materias.component';
import { CrearMateriaComponent } from './materias/crear-materia/crear-materia.component';
import { EditarMateriaComponent } from './materias/editar-materia/editar-materia.component';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegistroCursoComponent } from './registros/registros-curso/registros-curso.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CrearEstudianteComponent,
    ListadoEstudianteComponent,
    ListadoCursosComponent,
    EditarCursoComponent,
    CrearCursoComponent, 
    CrearProfesorComponent,
    ListadoProfesorComponent,
    ListadoMateriasComponent,
    CrearMateriaComponent,
    EditarMateriaComponent,
    NavbarComponent,
    RegistroCursoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule, 
    CommonModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
