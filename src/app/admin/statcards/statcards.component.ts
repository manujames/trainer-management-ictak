import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-statcards',
  templateUrl: './statcards.component.html',
  styleUrls: ['./statcards.component.css']
})
export class StatcardsComponent implements OnInit {

  counts={
    trainers:0,
    requests:0,
    courses:0
  }
  constructor(private content:ContentService) { }

  ngOnInit(): void {
    this.content.getCounts()
    .subscribe(
      (data:any)=>{
        this.counts.trainers = data.trainers;
        this.counts.requests = data.requests;
        this.counts.courses = data.courses;
      }
    )
  }

}
