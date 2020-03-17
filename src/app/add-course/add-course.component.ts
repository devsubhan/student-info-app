import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { CoursesService } from './../courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  add_course = this.fb.group({
    name: ['', Validators.required],
    duration: ['', Validators.required],
    fee: ['', Validators.required],
    startDate: ['', Validators.required]
  });

  constructor(private courseService: CoursesService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  addCourse() {
    this.courseService.addCourses(this.add_course).subscribe();
  }

}
