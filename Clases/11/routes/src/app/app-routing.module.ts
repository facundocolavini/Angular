import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EjemploUnoComponent } from './ejemplo-uno/ejemplo-uno.component';
import { EjemploDosComponent } from './ejemplo-dos/ejemplo-dos.component';


const rutas: Routes =[
  {path:'uno', component:EjemploUnoComponent},
  {path:'dos', component:EjemploDosComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
