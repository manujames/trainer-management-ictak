import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  user = {
    role:'',
    email: '',
    password: ''
  };

  loginState = 'none';
  errorMsg = '';

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    // If already logged in, get user role from server and redirect to apropriate page
    if(this.auth.isLoggedIn()){
      this.auth.getRole()
      .subscribe(
        (data:any)=>{
          if(data.role == 'admin'){
            this.router.navigate(['/admin']);
          }
          else if(data.role == 'trainer'){
            this.router.navigate(['/trainer']);
          }
          else{
            console.log(data);
          }
        }
      )
    }
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
        if(data.role == 'admin'){
          localStorage.setItem('token',data.token);
          this.resetForm();
          this.loginState = 'success';
          this.router.navigate(['/admin'])
        }
        else if(data.role == 'trainer'){
          localStorage.setItem('token',data.token);
          this.resetForm();
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
