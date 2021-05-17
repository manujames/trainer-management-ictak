import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address:string = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user)
  }
}
