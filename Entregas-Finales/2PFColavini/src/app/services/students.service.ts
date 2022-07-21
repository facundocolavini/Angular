import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Courses } from "../models/courses";
import { Students } from "../models/students";

@Injectable({
    providedIn: 'root',
})

export class StudentService {
    private  serverUrl: string = `http://localhost:9000`;
    constructor(private httpClient: HttpClient){}

    //GET ALL
    public getAllStudents(): Observable<Students[]>{
        let dataUrl = `${this.serverUrl}/students`;
        return this.httpClient.get<Students[]>(dataUrl).pipe(catchError(this.handleError))
    }

    //GET Student
    public getStudentById(studentId: string): Observable<Students>{
        let dataUrl = `${this.serverUrl}/students/${studentId}`;
        return this.httpClient.get<Students>(dataUrl).pipe(catchError(this.handleError))
    }
    // Create Student 
    public createStudent(student: Students ): Observable<Students>{
        let dataUrl = `${this.serverUrl}/students`;
        console.log(this.getAllStudents(),'TODOS')
        return this.httpClient.post<Students>(dataUrl,student).pipe(catchError(this.handleError))
    }

    // Update Student 
    public updateStudent(formEditStudent: Students, studentId: string ): Observable<Students>{
        let dataUrl = `${this.serverUrl}/students/${studentId}`;
        return this.httpClient.put<Students>(dataUrl,formEditStudent).pipe(catchError(this.handleError))
    }

    //Delete Student 
    public deleteStudent(studentId: string ): Observable<{}>{
        let dataUrl = `${this.serverUrl}/students/${studentId}`;
        return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError))
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