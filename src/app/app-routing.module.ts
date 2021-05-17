import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { TrainerDummyPageComponent } from './trainer-dummy-page/trainer-dummy-page.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';

const routes: Routes = [
  {path:'',component:HomeLoginComponent},
  {path:'enroll',component:EnrollFormComponent},
  {path:'welcome',component:WelcomeMessageComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'trainer',component:TrainerDummyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
