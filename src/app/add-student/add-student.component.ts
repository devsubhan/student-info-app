import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  add_student = this.fb.group({
    name: ['', Validators.required],
    age: [, Validators.required],
    class: ['', Validators.required],
    section: ['', Validators.required],
    address: ['', Validators.required],
    courseId: [, Validators.required]
  });
  constructor( private fb: FormBuilder, private studentService:StudentService) { }

  ngOnInit() {
  }

  addNewStudent() {
    this.studentService.addNewStudent(this.add_student).subscribe();
  }

}
