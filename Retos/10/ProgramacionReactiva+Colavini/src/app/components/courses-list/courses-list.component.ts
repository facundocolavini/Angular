import { Component, OnDestroy, OnInit } from '@angular/core';
import {filter, map, Observable,Subject,Subscription } from 'rxjs';
import { Courses } from 'src/app/models/courses';
import { CoursesService } from 'src/app/services/courses.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public errorMessage: string | null = null;
  public loading: boolean = false;
  public courseSearch = [];

  public courses = <any>[];

  public searchResults:string = '';

  constructor(private coursesService: CoursesService,    public fb: FormBuilder) {
        //Observable
      /* this.coursesO$ = coursesService.getCoursesObservable(); */

     /*  this.courses$=this.coursesService.getCoursesObservable()
      .pipe(map(courses => courses))
        .subscribe((courses) => {
          this.loading = false;
          this.courses = courses ;
        }) */

   }

  ngOnInit(): void {
      // Promise no es secuencial Es asyncrono devuelve una promesa que trae una respuesta
      // Se observa que la promesa al ser asyncrona no devuelve la data hasta no resolverse y solo devuelve una respuesta 
    
      /* this.coursesService.getCoursesPromise()
      .then((courses) => courses.json())
      .then((data) => {
        this.loading = false;
        this.courses = data;
        console.log(data,'Promise')
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.log(error)
      }) */
         this.coursesService.getAllCourses().subscribe((data) => {
      this.courses = data;
    },(error) => { this.errorMessage = error;})
   

    }

    onSubmit(form : any){

    } 

  
    ngOnDestroy() {
      this.courses.unsubscribe();
    }

}
