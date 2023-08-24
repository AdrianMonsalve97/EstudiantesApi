import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEstudianteComponent } from './estudiantes/crear-estudiante/crear-estudiante.component';
import { ListadoEstudianteComponent } from './estudiantes/listado-estudiante/listado-estudiante-component';
import { CrearCursoComponent } from './cursos/crear-curso/crear-curso.component';
import { ListadoCursosComponent } from './cursos/listado-cursos/listado-cursos.component';
import { EditarCursoComponent } from './cursos/editar-curso/editar-curso.component';
import { CrearProfesorComponent } from './profesores/crear-profesor/crear-profesor.component';
import { ListadoProfesorComponent } from './profesores/listado-profesor/listado-profesor.component';
import { ListadoMateriasComponent } from './materias/listado-materias/listado-materias.component';
import { CrearMateriaComponent } from './materias/crear-materia/crear-materia.component';
import { EditarMateriaComponent } from './materias/editar-materia/editar-materia.component';
import { RegistroCursoComponent } from './registros/registros-curso/registros-curso.component';

const routes: Routes = [  
  { path: 'crear', component: CrearEstudianteComponent },
  { path: 'listar', component: ListadoEstudianteComponent },
  { path: 'crear-curso', component: CrearCursoComponent },
  { path: 'creaprofe', component: CrearProfesorComponent },
  { path: 'listado-cursos', component: ListadoCursosComponent },
  { path: 'listprofe', component: ListadoProfesorComponent },
  { path: 'editar-curso/:id', component: EditarCursoComponent },
  { path: 'editar-materia/:id', component: EditarMateriaComponent },
  { path: 'creamateria', component:CrearMateriaComponent },
  { path: 'listamaterias', component: ListadoMateriasComponent},
  { path: 'registro', component:RegistroCursoComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
