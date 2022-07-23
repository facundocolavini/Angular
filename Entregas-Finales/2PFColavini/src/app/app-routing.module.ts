import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'courses', component: CoursesListComponent},
  {path: '', component: HomeComponent},
  {path: '**' , redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
