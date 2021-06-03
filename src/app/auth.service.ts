import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address:string = 'http://localhost:3000'
  constructor(private http:HttpClient, private router:Router) { }

  login(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user)
  }

  isLoggedIn(){
    // Return boolean: Token present or not.
    return !!localStorage.getItem('token');
  }

  getRole(){
    return this.http.get(`${this.server_address}/role`)
  }

  getToken(){
    return localStorage.getItem('token');  
  }

  enroll(trainer:any){
    return this.http.post<any>(`${this.server_address}/trainer/enroll`,trainer)
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  changePassword(credentials:any){
    return this.http.put<any>(`${this.server_address}/changepassword`, credentials)
  }

  getResetCode(credentials:any){
    return this.http.post<any>(`${this.server_address}/getresetcode`, credentials)
  }

  resetPassword(credentials:any){
    return this.http.post<any>(`${this.server_address}/reset-password`, credentials)
  }
}
