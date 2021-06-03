import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit 
{

    credentials = {
      email: '',
      password: '',
      resetCode: ''
    };
    repeatPassword = '';
  
    status = 'none';
    errorMsg = '';
    successMsg = '';
    resetCodeSent = false;
    changedPwd = false;
  
    constructor(private auth:AuthService, private router:Router) { }
  
    ngOnInit(): void {
    }

    getResetCode(){
      this.status == "connecting";
      this.errorMsg = '';
      this.successMsg = '';
      this.auth.getResetCode(this.credentials)
      .subscribe(
        data=>{
          this.status = "success";
          this.successMsg = 'Reset code sent to your email ID.';
          this.resetCodeSent = true;
        },
        error=>{
          this.status = "error";
          if(error.status==404){
            this.errorMsg = error.error;
          }
          else{
            console.log(error);
            this.errorMsg = 'Sorry! Something went wrong.'
          }
        }
      )
    }
  
    resetPwd() {
      if(this.credentials.password != this.repeatPassword){
        this.status = 'error';
        this.errorMsg = "Passwords do not match. Please re enter your passwords";
        this.credentials.password = '';
        this.repeatPassword = '';
      }
      else{
        this.status = "connecting";
        this.auth.resetPassword(this.credentials)
        .subscribe(
          data=>{
            this.status = "success";
            this.successMsg = 'Password changed successfully. Now you can login.';
            this.changedPwd = true;
          },
          error=>{
            this.status = "error";
            if(error.status == 401){
              // wrong reset code
              this.errorMsg = error.error;
            }
            else if(error.status == 404){
              // Wrong email ID 
              this.errorMsg = error.error;
              this.resetCodeSent = false;
              this.credentials.resetCode = '';
              this.credentials.password = '';
              this.repeatPassword = '';
            }
            else if(error.status == 410){
              // Reset code expired.
              this.errorMsg = error.error;
              this.resetCodeSent = false;
              this.credentials.resetCode = '';
              this.credentials.password = '';
              this.repeatPassword = '';
            }
            else{
              console.log(error);
              this.errorMsg = 'Sorry! Something went wrong.'
            }
          }
        )
      }
    }

    resetForm(){
      this.credentials.email = '';
      this.credentials.password = '';
      this.credentials.resetCode = '';
      this.repeatPassword = '';
    
      this.status = 'none';
      this.errorMsg = '';
      this.successMsg = '';
      this.resetCodeSent = false;
      this.changedPwd = false;
    }

  }
  
