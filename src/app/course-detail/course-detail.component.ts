import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course;

  constructor(private ActivatedRoute: ActivatedRoute, private courseService: CoursesService) { }

  ngOnInit() {
    this.courseDetail();
  }

  courseDetail() {
    const id = +this.ActivatedRoute.snapshot.paramMap.get('id');
    this.courseService.getCurrentCourse(id).subscribe({
      next: (response) => {
        this.course = response;
      }
    });
  }

}
