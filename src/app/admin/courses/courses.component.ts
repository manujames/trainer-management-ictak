import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  newCourse = {
    id:'',
    name:''
  }

  newBatch = {
    course:'',
    name:''
  }
  courses:any;
  constructor(private content:ContentService, private router:Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.content.getCourses()
    .subscribe(
      data=>{
        this.courses = data;
      }
    )
  }

  addCourse(form:FormGroup){
    this.content.addCourse(this.newCourse)
    .subscribe(
      data=>{
        alert("Course added");
        // Clear input fileds and reload table contents
        this.newCourse.id = '';
        this.newCourse.name = '';
        form.controls.courseId.markAsUntouched()
        form.controls.courseName.markAsUntouched()
        form.controls.courseId.markAsPending()
        form.controls.courseName.markAsPending()
        this.getCourses();
      },
      error=>{
        if(error.status == 403){
          // Forbidden
          alert("You're not allowed to perform this action.");
          this.router.navigate(['/trainer']);
        }
        else if(error.status == 409){
          alert(error.error);
        }
        else{
          console.log(error);
          alert("Sorry, something went wrong. Please try later.");
        }
      }
    )
  }

  addBatch(form:FormGroup){
    this.content.addBatch(this.newBatch)
    .subscribe(
      data=>{
        alert("Batch added");
        // Clear input fileds and reload table contents
        this.newBatch.course = '';
        this.newBatch.name = '';
        form.controls.batchName.markAsUntouched()
        form.controls.courseCode.markAsUntouched()
        form.controls.courseCode.markAsPristine()
        form.controls.batchName.markAsPending()
        this.getCourses();
      },
      error=>{
        if(error.status == 403){
          // Forbidden
          alert("You're not allowed to perform this action.");
          this.router.navigate(['/trainer']);
        }
        else if(error.status == 409){
          alert(error.error);
        }
        else{
          console.log(error);
          alert("Sorry, something went wrong. Please try later.");
        }
      }
    )
  }

}
