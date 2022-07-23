import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  public updated: boolean = false;
  public studentId: string | null = null;
  public courses:Courses[] = [] as Courses[];
  public student:Students = {} as Students;
  public studsentCourse: Courses = {} as Courses;
  public errorMessage: string | null = null;

  constructor( public fb: FormBuilder,  private studentService: StudentService,public activedRoute: ActivatedRoute,  public coursesService: CoursesService) {
    this.formEditStudent = this.fb.group({
      //Cada control se pasa como un nodo dentro de un objeto
      name: ['' , [Validators.required]],
      lastName:  ['' , [Validators.required]],
      calification:  ['' , [Validators.required]],
      courseId: new FormControl('', [Validators.required])
    }); 
  }

  ngOnInit(): void {
 
  
    this.activedRoute.paramMap.subscribe((param) => {
      this.studentId = param.get('studentId');
    });
    if(this.studentId){
      this.loading = true;
      // Obtengo todos los cursos 
      this.coursesService.getAllCourses().subscribe((data) => {
        this.courses = data;
      },(error) => { this.errorMessage = error;})

      // Obtengo al estudiante 
      this.studentService.getStudentById(this.studentId).subscribe((dataStudent) => {
        this.loading = true;
        this.student = dataStudent;
        this.formEditStudent.controls['name'].setValue(this.student.name)
        this.formEditStudent.controls['lastName'].setValue(this.student.lastName)
        this.formEditStudent.controls['calification'].setValue(this.student.calification)
        this.formEditStudent.controls['courseId'].setValue(this.student.courseId)

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

  onSubmit(event: Event) {
    console.log(event,'id')
    if(this.studentId){
      console.log(this.formEditStudent,'fomrstudent')
      if(
        this.formEditStudent.valid
      ){
      this.studentService.updateStudent(this.formEditStudent.value,this.studentId).subscribe(data => {
        this.updated = true;
      })
      }else{
        this.updated = false;
        this.errorMessage = 'Faltan campos o hay un error al enviar los datos de edicion';
      }
    }
  }
}
