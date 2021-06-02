import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.css']
})
export class EnrollFormComponent implements OnInit {

  trainer = {
    fname: '',
    sname: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    gender: '',
    qualification: '',
    skills: '',
    currCompany: '',
    currDesig: '',
    course:'',
    img: {
      data:'',
      contentType:''
    }
  };

  repeatPassword = '';
  otherQualification = '';

  courses:any;

  MaxFileSize = 1*1024*1024;  //bytes
  imageSrc!: string;
  imgError = '';

  status = 'none';
  errorMsg = '';

  constructor(private auth:AuthService, private content:ContentService, private router:Router) { }

  ngOnInit(): void {
    this.content.getCourses()
    .subscribe(
      data=>{
        this.courses = data;
      }
    )
  }

  register() {
    if(this.trainer.password != this.repeatPassword){
      this.status = 'error';
      this.errorMsg = "Passwords do not match. Please re enter your passwords";
      this.trainer.password = '';
      this.repeatPassword = '';
    }
    else{
      this.status = 'connecting';
      if(this.trainer.qualification == 'others'){
        this.trainer.qualification = this.otherQualification;
      }
      this.auth.enroll(this.trainer)
      .subscribe(
        data =>{
          this.status = 'success';
          this.router.navigate(['/welcome'])
        },
        error =>{
          this.status = 'error'
          if(error.status === 409){
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

  onFileChange(event:any) {
    const reader = new FileReader();
    this.imageSrc = '';
    this.imgError = '';
    this.trainer.img.data = '';
    this.trainer.img.contentType = '';
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      if(file.size>this.MaxFileSize){
        this.imgError = 'Selected file is larger than 1 MB. Select a smaller image.';
      }
      else if(file.type.split('/')[0] !== 'image'){
        this.imgError = 'Selected file is not an image. Please select an image file.'
      }
      else{
        reader.onload = () => {
          this.imageSrc = reader.result as string;
          this.trainer.img.data = reader.result as string;
          this.trainer.img.contentType = file.type;
        };

        reader.readAsDataURL(file);
      }
    }
  }
}
