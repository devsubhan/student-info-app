import { Component, OnInit } from '@angular/core';
import { Course } from './../course';
import { CoursesService } from './../courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  coursesList:Course[];

  constructor( private courseService: CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses():void {
    this.courseService.getCourses().subscribe((response) => {
      this.coursesList = response;
    })
  }

  deleteCourse(course):void {
    this.courseService.deleteCourse(course.id).subscribe();
  }

}
