import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Courses } from 'src/app/models/courses';
import { Students } from 'src/app/models/students';
import { StudentService } from 'src/app/services/students.service';
import  { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  public formEditStudent : FormGroup;
  public loading: boolean = false;
  public studentId: string | null = null;
  public student:Students = {} as Students;
  public studsentCourse: Courses = {} as Courses;
  public errorMessage: string | null = null;

  constructor( public fb: FormBuilder,  private studentService: StudentService,public activedRoute: ActivatedRoute,  public coursesService: CoursesService) {
    this.formEditStudent = this.fb.group({
      //Cada control se pasa como un nodo dentro de un objeto
      name: [null , [Validators.required]],
      lastName:  [null , [Validators.required]],
      imageProfile:  [null , [Validators.required]],
      courseId: new FormControl(null, [Validators.required])
    }); 
  }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe((param) => {
      this.studentId = param.get('studentId');
    });
    if(this.studentId){
      this.loading = true;

      this.studentService.getStudentById(this.studentId).subscribe((dataStudent) => {
        console.log(dataStudent, 'Student');
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

  onSubmit(fomrData : any) {

  }

  editStudent(e : any)  {
    console.log(e.target.value,'editStudent')
  }

}
