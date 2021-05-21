import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDataTableComponent } from './admin-data-table/admin-data-table.component';
import { AdminNavbarsComponent } from './admin-navbars/admin-navbars.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { TrainerDummyPageComponent } from './trainer-dummy-page/trainer-dummy-page.component';
import { RequestsComponent } from './requests/requests.component';
import { SettingsComponent } from './settings/settings.component';
import { CoursesComponent } from './courses/courses.component';
import { StatcardsComponent } from './statcards/statcards.component';



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
    TrainerDummyPageComponent,
    RequestsComponent,
    SettingsComponent,
    CoursesComponent,
    StatcardsComponent,
   
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
