import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Courses } from "../models/courses";
import { Students } from "../models/students";

@Injectable({
    providedIn: 'root',
})

export class CoursesService {
    private  serverUrl: string = `http://localhost:9000`;
    constructor(private httpClient: HttpClient){}

        //GET ALL Course
        public getAllCourses(): Observable<any>{
            let dataUrl = `${this.serverUrl}/courses`;
            return this.httpClient.get<any>(dataUrl).pipe(catchError(this.handleError))
        }
        //GET Single Course Es de tipo estudiante ya que necesitamos el id del curso que selecciono el estudiante
        public getCourse(course: Students): Observable<Courses>{
            let dataUrl = `${this.serverUrl}/courses/${course.courseId}`;
            return this.httpClient.get<Courses>(dataUrl).pipe(catchError(this.handleError))
        }
    
        //Error Handler
        public handleError(error:HttpErrorResponse){
            let errorMessage = '';
            if(error.error instanceof ErrorEvent){
                //error del cliente 
                errorMessage = `Error: ${error.error.message}`;
            }else{
                //server error 
                errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
            }
    
            return throwError(errorMessage);
        }
}