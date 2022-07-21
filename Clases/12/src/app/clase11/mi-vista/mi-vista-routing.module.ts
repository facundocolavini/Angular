import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploContenidoDosComponent } from './ejemplo-contenido-dos/ejemplo-contenido-dos.component';
import { RouterModule, Routes } from '@angular/router';
import { MiVistaComponent } from './mi-vista.component';

const rutas: Routes = [
  {
    path: '',
    component: MiVistaComponent,
    children: [
      { path: 'contenido-uno', loadChildren: () => import('./ejemplo-contenido-uno/ejemplo-contenido-uno.module').then(m => m.EjemploContenidoUnoModule) },
      { path: 'contenido-dos', component: EjemploContenidoDosComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class MiVistaRoutingModule { }
