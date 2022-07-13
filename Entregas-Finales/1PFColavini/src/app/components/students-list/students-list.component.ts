import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/students';
import { StudentService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  public loading: boolean = false;
  public students:Students[] = [];
  public errorMessage: string | null = null;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loading = true;
    this.studentService.getAllStudents().subscribe((data)=>{
      this.students = data;
      this.loading = false;
    },
    (error)=>{
      this.errorMessage = error;
      this.loading = false;
    })
    
  }
  editStudent(student: any): void {
 
    
    this.studentService.getStudentById(student).subscribe((data)=>{
      
    })
  }

  deleteStudent(student: any): void {
   this.studentService.deleteStudent(student).subscribe((data)=>{
     this.studentService.getAllStudents().subscribe((data)=>{
      this.students = data;
      this.loading = false;
   })
   },(error)=>{
    this.errorMessage = error;
    this.loading = false;
  })
  }
}
