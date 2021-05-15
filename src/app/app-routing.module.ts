import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { HomeLoginComponent } from './home-login/home-login.component';

const routes: Routes = [
  {path:'',component:HomeLoginComponent},
  {path:'enroll',component:EnrollFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
