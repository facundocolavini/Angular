import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoUnoComponent } from './contenido-uno/contenido-uno.component';
import { ContenidoDosComponent } from './contenido-dos/contenido-dos.component';
import { RouterModule, Routes } from '@angular/router';
import { MiVistaComponent } from './mi-vista/mi-vista.component';

const rutas: Routes =[
  {
    path: 'mi-vista',
    component: MiVistaComponent
    
  }
  {path:'contenido-uno', component:ContenidoUnoComponent},
  {path:'contenido-dos', component:ContenidoDosComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],exports: [RouterModule]
})
export class MiVistaRoutingModule { }
