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

    user = {
      role:'',
      email: '',
      password: ''
    };
  
    loginState = 'none';
    errorMsg = '';
  
    constructor(private auth:AuthService, private router:Router) { }
  
    ngOnInit(): void {
    }
  
    resetForm(){
      this.user = {
        role:'',
        email: '',
        password: ''
      };
      this.loginState = 'none';
      this.errorMsg = '';
    }
  
    login() {
      this.loginState = 'connecting';
      this.auth.login(this.user)
      .subscribe(
        data =>{
          // localStorage.setItem('token',data.token);
          // this.resetForm();
          // this.router.navigate(['/']);
          if(data.role == 'admin'){
            this.loginState = 'success';
            this.router.navigate(['/admin'])
          }
          else if(data.role == 'trainer'){
            this.loginState = 'success';
            this.router.navigate(['/trainer'])
          }
          else{
            this.loginState = 'error'
            this.errorMsg = 'Sorry! Something went wrong.'
            console.log(data);
          }
        },
        error =>{
          this.loginState = 'error'
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
  
