import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from './course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courseURL = "https://sis-rest-api.herokuapp.com/api/courses";

  constructor(private httpCourseList: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.httpCourseList.get<Course[]>(this.courseURL);
  }

  addCourses(add_course): Observable<Course> {
    const courseDetails = 'https://sis-rest-api.herokuapp.com/api/courses';
    return this.httpCourseList.post<Course>(courseDetails, add_course.value);
  }

  deleteCourse(id): Observable<{}> {
    const courseDetails = `https://sis-rest-api.herokuapp.com/api/courses/${id}`;
    return this.httpCourseList.delete(courseDetails);
  }

  getCurrentCourse(id:number): Observable<Course>{
    const courseDetails = `https://sis-rest-api.herokuapp.com/api/courses/${id}`;
    return this.httpCourseList.get<Course>(courseDetails);
  }

  editCourse(id:number, edit_course): Observable<Course> {
    const courseDetails = `https://sis-rest-api.herokuapp.com/api/courses/${id}`;
    return this.httpCourseList.put<Course>(courseDetails, edit_course.value);
  }
}
