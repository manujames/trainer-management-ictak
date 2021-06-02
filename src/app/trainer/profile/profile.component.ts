import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;
  constructor(private content:ContentService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.content.getProfile()
    .subscribe(
      data=>{
        this.profile = data;
      },
      error=>{
        console.log(error);
        if(error.status === 401){
          // This error happens when logged in user tokens differ from actuall database.
          // logout, clear tokens and redirect to login page.
          this.auth.logout();
        }
        else if(error.status === 403){
          // This error happens when logged in admin tries to access this trainer route.
          // redirect to admin dashboard.
          this.router.navigate(['/admin']);
        }
        else{
          // Other errors may happen when server could not find trainer profile.
          // logout, clear saved token and redirect to login page.
          this.auth.logout();
        }
      }
    )
  }

}
