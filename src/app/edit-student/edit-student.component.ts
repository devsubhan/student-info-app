import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  edit_student = this.fb.group({
    name: ['', Validators.required],
    age: [, Validators.required],
    class: ['', Validators.required],
    section: ['', Validators.required],
    address: ['', Validators.required],
    courseId: [, Validators.required]
  });

  constructor(private fb: FormBuilder, private studentService:StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent():void{
    const id = +this.route.snapshot.paramMap.get('id');

    this.studentService.getStudent(id).subscribe({
      next: (student) => {
        this.edit_student.patchValue(student);
        //console.log(this.student);
      }
    })
  }

  editStudent():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.editStudent(id, this.edit_student).subscribe({
      next: (response) => {
        this.router.navigate(['/student-list']);
      }
    });
  }

}
