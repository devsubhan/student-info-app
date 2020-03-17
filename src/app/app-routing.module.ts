import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  {path: "student-list", component: StudentListComponent},
  {path: "student-detail/:id", component: StudentDetailComponent},
  {path: "edit-student/:id", component: EditStudentComponent},
  {path: "add-student", component: AddStudentComponent},
  {path: "course-list", component: CourseListComponent},
  {path: "course-detail/:id", component: CourseDetailComponent},
  {path: "edit-course/:id", component: EditCourseComponent},
  {path: "add-course", component: AddCourseComponent},
  {path: "", redirectTo: "student-list", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
