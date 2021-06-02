import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  credentials = {
    currentPassword: '',
    newPassword: ''
  };

  repeatedPwd = ''

  status = 'none';
  errorMsg = '';

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  changePassword(){
    if(this.credentials.newPassword != this.repeatedPwd){
      this.status = 'error';
      this.errorMsg = "Passwords do not match. Please re enter your passwords";
      this.credentials.newPassword = '';
      this.repeatedPwd = '';
    }
    else{
      this.status = 'connecting';
      this.auth.changePassword(this.credentials)
      .subscribe(
        data=>{
          this.status = 'success';
          localStorage.setItem('token',data.token);
          setTimeout(()=>{
            this.router.navigate(['/admin']);
          },1000);
        },
        error=>{
          this.status = 'error'
          if(error.status === 401){
            this.errorMsg = error.error;
          }
          else{
            this.errorMsg = 'Sorry! Something went wrong.'
            console.log(error);
          }
        }
      )
    }
  }

}
