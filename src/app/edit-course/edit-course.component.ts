import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { CoursesService } from './../courses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  edit_course = this.fb.group({
    name: ['', Validators.required],
    duration: ['', Validators.required],
    fee: ['', Validators.required],
    startDate: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private courseService: CoursesService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCurrentCourse();
  }

  getCurrentCourse() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCurrentCourse(id).subscribe({
      next: (currentCourse) => {
        this.edit_course.patchValue(currentCourse);
      }
    });
  }

  editCourse ():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.editCourse(id, this.edit_course).subscribe({
      next: () => {
        this.router.navigate(['/course-list']);
      }
    });
  }

}
