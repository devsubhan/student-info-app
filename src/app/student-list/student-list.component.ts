import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from './../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList:Student[];
  //selectedStudent;

  constructor( private studentService: StudentService ) { }

  ngOnInit() {
    this.getStudents()
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe((response) => {
        this.studentList = response;
        //console.log(this.studentList);
      }
    )
  }

  deleteStudent(student) {
    this.studentService.deleteStudent(student.id).subscribe();
  }



  // studentDetail(student) {
  //   this.selectedStudent = student;
  //   console.log(this.selectedStudent);
  // }
}
