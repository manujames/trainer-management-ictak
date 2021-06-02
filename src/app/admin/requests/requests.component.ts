import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests:any;
  constructor(private content:ContentService) { }

  ngOnInit(): void {
    this.content.getRequests()
    .subscribe(
      data=>{
        this.requests = data;
        console.log(this.requests)
      },
      error=>{

      }
    )
  }

}
