import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = "https://sis-rest-api.herokuapp.com/api/students";
  constructor( private httpStudentList: HttpClient ) { }

  getStudents(): Observable<Student[]> {
    return this.httpStudentList.get<Student[]>(this.studentsUrl)
  }

  getStudent(id:number): Observable<Student[]> {
    const studentDetailURL = `https://sis-rest-api.herokuapp.com/api/students/${id}`;

    return this.httpStudentList.get<Student[]>(studentDetailURL);
  }

  deleteStudent(id:number): Observable<{}> {
    const studentDetailURL = `https://sis-rest-api.herokuapp.com/api/students/${id}`;
    return this.httpStudentList.delete(studentDetailURL);
  }

  addNewStudent(add_student): Observable<Student> {
    const studentDetailURL = `https://sis-rest-api.herokuapp.com/api/students`;
    return this.httpStudentList.post<Student>(studentDetailURL, add_student.value);
  }

  editStudent(id:number, edit_student): Observable<Student> {
    const studentDetailURL = `https://sis-rest-api.herokuapp.com/api/students/${id}`;
    return this.httpStudentList.put<Student>(studentDetailURL, edit_student.value)
  }
}
