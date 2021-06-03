import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  // server_address:string = '/api';                    // For production build
  server_address:string = 'http://localhost:3000';      // For development
  constructor(private http:HttpClient) { }

  getCourses(){
    return this.http.get(`${this.server_address}/courses`)
  }

  getProfile(){
    return this.http.get(`${this.server_address}/trainer/profile`)
  }

  getAllTrainers(){
    return this.http.get(`${this.server_address}/admin/trainers`)
  }

  getSingleTrainer(id: any){
    return this.http.get(`${this.server_address}/admin/trainer/${id}`)
  }

  getCounts(){
    return this.http.get(`${this.server_address}/admin/statistics`)
  }

  getRequests(){
    return this.http.get(`${this.server_address}/admin/enroll-requests`)
  }

  approveEnrollment(credentials:any){
    return this.http.put<any>(`${this.server_address}/admin/approve-enroll`,credentials)
  }

  rejectEnrollment(id:any){
    return this.http.delete<any>(`${this.server_address}/admin/reject-enroll/${id}`)
  }

  deleteTrainer(id:any){
    return this.http.delete<any>(`${this.server_address}/admin/delete-trainer/${id}`)
  }

  addCourse(course:any){
    return this.http.post<any>(`${this.server_address}/admin/add-course/`,course)
  }

  addBatch(batch:any){
    return this.http.post<any>(`${this.server_address}/admin/add-batch/`,batch)
  }
}
