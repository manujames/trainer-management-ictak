import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-trainer-navbars',
  templateUrl: './trainer-navbars.component.html',
  styleUrls: ['./trainer-navbars.component.css']
})
export class TrainerNavbarsComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  
  }

  logout(){
    this.auth.logout();
  }

}
