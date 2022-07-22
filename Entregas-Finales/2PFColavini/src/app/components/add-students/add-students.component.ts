import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Courses } from 'src/app/models/courses';
import { Students } from 'src/app/models/students';
import { CoursesService } from 'src/app/services/courses.service';
import { StudentService } from 'src/app/services/students.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  public formAddStudent : FormGroup;
  public loading : boolean = false;
  public posting: boolean = false;
  public students:Students={} as Students;
  public errorMessage: string | null = null;
  public courses:Courses[] = [] as Courses[];
  public allStudents: Array<Students> = [];
 

  constructor(private coursesService: CoursesService,
    private studentService: StudentService,
    public fb: FormBuilder
  ) {
    this.formAddStudent = this.fb.group({
      //Cada control se pasa como un nodo dentro de un objeto
      name: [null , [Validators.required]],
      lastName:  [null , [Validators.required]],
      calification:  [null , [Validators.required]],
      courseId: new FormControl(null, [Validators.required])
     }); 
     
  }
  
  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe((data) => {
      this.courses = data;
    },(error) => { this.errorMessage = error;})
    this.studentService.getAllStudents().subscribe((data) => {
      this.allStudents = data;
    },(error) => { this.errorMessage = error;});

  }
  
  onSubmit(valorFormulario: any) { 
    if(this.formAddStudent.status === 'VALID'){
      this.studentService.createStudent(this.formAddStudent.value).subscribe(student => {
        this.posting = true;
      });
    }else{
       this.errorMessage = 'No se puede crear el estudiante :(';
       this.posting = false;
    }
  }

}
