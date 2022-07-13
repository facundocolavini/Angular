import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courses } from 'src/app/models/courses';
import { Students } from 'src/app/models/students';
import { StudentService } from 'src/app/services/students.service';
import {CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public loading: boolean = false;
  public studentId: string | null = null;
  public student:Students = {} as Students;
  public studsentCourse: Courses = {} as Courses;
  public errorMessage: string | null = null;

  constructor(public activedRoute: ActivatedRoute,
    public studentsService: StudentService,
    public coursesService: CoursesService) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe((param) => {
      this.studentId = param.get('studentId');
    });
    //Obtengo el estudiante por id 
    if(this.studentId){
      this.loading = true;

      this.studentsService.getStudentById(this.studentId).subscribe((dataStudent) => {
        this.student = dataStudent;
        this.coursesService.getCourse(this.student).subscribe((course) => {
          this.studsentCourse.name = course.name;
        });

        this.loading=false;
       
      },(error)=>{
        this.errorMessage = error.message;
        this.loading=false;
      });
    }
  }
  public isExistStudent(){
    return Object.keys(this.student).length > 0;
  }
  
  public isExistCourse(){
    return Object.keys(this.studsentCourse).length > 0 &&  Object.keys(this.student).length > 0 ;
  }
}
