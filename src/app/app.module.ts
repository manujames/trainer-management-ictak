import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoginComponent } from './index/home-login/home-login.component';
import { EnrollFormComponent } from './index/enroll-form/enroll-form.component';
import { WelcomeMessageComponent } from './index/welcome-message/welcome-message.component';
import { FooterComponent } from './index/footer/footer.component';
import { AdminDataTableComponent } from './admin/admin-data-table/admin-data-table.component';
import { AdminNavbarsComponent } from './admin/admin-navbars/admin-navbars.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
// import { TrainerDummyPageComponent } from './trainer-dummy-page/trainer-dummy-page.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { StatcardsComponent } from './admin/statcards/statcards.component';
import { TrainerComponent } from './trainer/trainer.component';
import { ProfileComponent } from './trainer/profile/profile.component';
import { TrainerNavbarsComponent } from './trainer/trainer-navbars/trainer-navbars.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    EnrollFormComponent,
    WelcomeMessageComponent,
    FooterComponent,
    AdminDataTableComponent,
    AdminNavbarsComponent,
    AdminDashboardComponent,
    // TrainerDummyPageComponent,
    RequestsComponent,
    SettingsComponent,
    CoursesComponent,
    StatcardsComponent,
    TrainerComponent,
    ProfileComponent,
    TrainerNavbarsComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
