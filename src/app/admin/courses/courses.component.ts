import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:any;
  constructor(private content:ContentService) { }

  ngOnInit(): void {
    this.content.getCourses()
    .subscribe(
      data=>{
        this.courses = data;
      }
    )
  }

}
