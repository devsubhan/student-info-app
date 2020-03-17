import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.getStudentDetail();
  }

  getStudentDetail():void{
    const id = +this.route.snapshot.paramMap.get('id');

    this.studentService.getStudent(id).subscribe({
      next: (student) => {
        this.student = student;
        //console.log(this.student);
      }
    })
  }

}
