import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EjemploUnoComponent } from './clase11/ejemplo-uno/ejemplo-uno.component';
import { EjemploDosComponent } from './clase11/ejemplo-dos/ejemplo-dos.component';
import { AppComponent } from './app.component';

const rutas: Routes = [
  { path: 'uno', component: EjemploUnoComponent },
  { path: 'dos', component: EjemploDosComponent },
  { path: 'mi-vista', loadChildren: () => import('./clase11/mi-vista/mi-vista.module').then(m => m.MiVistaModule) },
  { path: '', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
