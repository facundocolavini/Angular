import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentsComponent } from 'src/app/components/add-students/add-students.component';
import { EditStudentComponent } from 'src/app/components/edit-student/edit-student.component';
import { StudentDetailsComponent } from 'src/app/components/student-details/student-details.component';
import { StudentsListComponent } from 'src/app/components/students-list/students-list.component';

@NgModule({
  declarations: [
    AddStudentsComponent,
    EditStudentComponent,
    StudentDetailsComponent,
    StudentsListComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StudentsModule { }
