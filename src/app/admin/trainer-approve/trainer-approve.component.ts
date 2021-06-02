import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-trainer-approve',
  templateUrl: './trainer-approve.component.html',
  styleUrls: ['./trainer-approve.component.css']
})
export class TrainerApproveComponent implements OnInit {

  trainerId!: string | null;
  profile:any;
  constructor(
    private activeRoute: ActivatedRoute,
    private router:Router,
    private content:ContentService, 
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.trainerId =  this.activeRoute.snapshot.paramMap.get("id");
    this.content.getSingleTrainer(this.trainerId)
    .subscribe(
      data=>{
        this.profile = data;
        if(!this.profile.type){
          this.profile.type = '';
        }
      },
      error=>{
        console.log(error)
        if(error.status === 401){
          // This error happens when logged in user tokens differ from actuall database.
          // logout, clear tokens and redirect to login page.
          this.auth.logout();
        }
        else if(error.status === 403){
          // This error happens when logged in trainer tries to access this admin route.
          // redirect to trainer dashboard.
          this.router.navigate(['/trainer']);
        }
        else if(error.status === 404){
          // This error happens when searched trainer profile not found on database.
          // Redirect to requests page.
          this.router.navigate(['/requests']);
        }
        else{
          // Other errors may happen due to server error.
          this.auth.logout();
        }
      }
    )
  }

  approve(){
    let confirmed = confirm(`Are you sure to approve ${this.profile.fname}'s request?`)
    if(confirmed){
      let credentials = {
        id:this.profile.ictId,
        type:this.profile.type
      }
      this.content.approveEnrollment(credentials)
      .subscribe(
        data=>{
          this.router.navigate(['/admin'])
        },
        error=>{
          console.log(error)
          if(error.status === 401){
            // This error happens when logged in user tokens differ from actuall database.
            // logout, clear tokens and redirect to login page.
            this.auth.logout();
          }
          else if(error.status === 403){
            // This error happens when logged in trainer tries to access this admin route.
            // redirect to trainer dashboard.
            this.router.navigate(['/trainer']);
          }
          else{
            // Other errors may happen due to server error.
            this.auth.logout();
          }
        }
      )
    }
  }

  reject(){
    let confirmed = confirm(`Are you sure to reject ${this.profile.fname}'s request?`)
    if(confirmed){
      this.content.rejectEnrollment(this.profile.ictId)
      .subscribe(
        data=>{
          this.router.navigate(['/admin'])
        },
        error=>{
          console.log(error)
          if(error.status === 401){
            // This error happens when logged in user tokens differ from actuall database.
            // logout, clear tokens and redirect to login page.
            this.auth.logout();
          }
          else if(error.status === 403){
            // This error happens when logged in trainer tries to access this admin route.
            // redirect to trainer dashboard.
            this.router.navigate(['/trainer']);
          }
          else{
            // Other errors may happen due to server error.
            this.auth.logout();
          }
        }
      )
    }
  }

  delete(){
    let confirmed = confirm(`Are you sure to delete ${this.profile.fname}'s profile?`)
    if(confirmed){
      this.content.deleteTrainer(this.profile.ictId)
      .subscribe(
        data=>{
          this.router.navigate(['/admin'])
        },
        error=>{
          console.log(error)
          if(error.status === 401){
            // This error happens when logged in user tokens differ from actuall database.
            // logout, clear tokens and redirect to login page.
            this.auth.logout();
          }
          else if(error.status === 403){
            // This error happens when logged in trainer tries to access this admin route.
            // redirect to trainer dashboard.
            this.router.navigate(['/trainer']);
          }
          else{
            // Other errors may happen due to server error.
            this.auth.logout();
          }
        }
      )
    }
  }

}
