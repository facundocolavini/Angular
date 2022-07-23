import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from 'src/app/components/students-list/students-list.component';
import { AddStudentsComponent } from '../../components/add-students/add-students.component';
import { EditStudentComponent } from '../../components/edit-student/edit-student.component';
import { StudentDetailsComponent } from '../../components/student-details/student-details.component';



const routes: Routes = [
  {path: 'students',component:StudentsListComponent},
  {path: 'students/create',component:AddStudentsComponent},
  {path: 'students/edit/:studentId',component:EditStudentComponent},
  {path: 'students/student/:studentId',component:StudentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
