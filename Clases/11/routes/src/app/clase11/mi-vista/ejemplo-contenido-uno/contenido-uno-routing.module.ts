import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EjemploContenidoUnoComponent } from './ejemplo-contenido-uno.component';
import { SubcomponenteUnoComponent } from './subcomponente-uno/subcomponente-uno.component';
import { SubcomponenteDosComponent } from './subcomponente-dos/subcomponente-dos.component';

const rutas: Routes = [
  {
    path: '',
    component: EjemploContenidoUnoComponent,
    children: [
      { path: 'sub-uno', component:  SubcomponenteUnoComponent},
      { path: 'sub-dos', component: SubcomponenteDosComponent }
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
export class ContenidoUnoRoutingModule { }
