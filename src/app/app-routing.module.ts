import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminDataTableComponent } from './admin/admin-data-table/admin-data-table.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { EnrollFormComponent } from './index/enroll-form/enroll-form.component';
import { HomeLoginComponent } from './index/home-login/home-login.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { WelcomeMessageComponent } from './index/welcome-message/welcome-message.component';
import { TrainerComponent } from './trainer/trainer.component'
import { PasswordResetComponent} from './index/password-reset/password-reset.component';
import { PasswordResetMessageComponent} from './index/password-reset-message/password-reset-message.component';
import { ChangePasswordComponent } from './trainer/change-password/change-password.component'
import { CalenderComponent } from './trainer/calender/calender.component'
import { ProfileComponent } from './trainer/profile/profile.component'

const routes: Routes = [
  {path:'',component:HomeLoginComponent},
  {path:'enroll',component:EnrollFormComponent},
  {path:'welcome',component:WelcomeMessageComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'admintable',component:AdminDataTableComponent},
  {path:'requests',component:RequestsComponent},
  {path:'settings',component:SettingsComponent},
  {path:'courses',component:CoursesComponent},
  {path:'trainer',component:TrainerComponent},
  {path:'passwordreset',component:PasswordResetComponent},
  {path:'passwordresetmessage',component:PasswordResetMessageComponent},
  {path:'changepassword',component:ChangePasswordComponent },
  {path:'calender',component:CalenderComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
