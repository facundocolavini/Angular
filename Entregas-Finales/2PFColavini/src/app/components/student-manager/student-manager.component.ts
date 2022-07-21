import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/students';
import { StudentService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-manager',
  templateUrl: './student-manager.component.html',
  styleUrls: ['./student-manager.component.css']
})
export class StudentManagerComponent implements OnInit {
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

}
