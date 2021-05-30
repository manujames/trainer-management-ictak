import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

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

  }

}
