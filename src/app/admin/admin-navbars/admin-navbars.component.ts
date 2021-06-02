import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin-navbars',
  templateUrl: './admin-navbars.component.html',
  styleUrls: ['./admin-navbars.component.css']
})
export class AdminNavbarsComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}
