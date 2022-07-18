import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/models/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public $courses:Observable<Courses[]> = new Observable();
  constructor(public coursesService: CoursesService) { }

  ngOnInit(): void {
    console.log(this.coursesService.getAllCourses(),'GET ALL');
    this.$courses = this.coursesService.getAllCourses()
  } 
  
}
