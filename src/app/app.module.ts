import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
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
import { PasswordResetComponent } from './index/password-reset/password-reset.component';
import { CalenderComponent } from './trainer/calender/calender.component';
import { ChangePasswordComponent } from './trainer/change-password/change-password.component';
import { PasswordResetMessageComponent } from './index/password-reset-message/password-reset-message.component';
import { TrainerFooterComponent } from './trainer/trainer-footer/trainer-footer.component';
import { ContentService } from './content.service';
import { TokenIntercepterService } from './token-intercepter.service';
import { TrainerApproveComponent } from './admin/trainer-approve/trainer-approve.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

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
    PasswordResetComponent,
    CalenderComponent,
    ChangePasswordComponent,
    PasswordResetMessageComponent,
    TrainerFooterComponent,
    TrainerApproveComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FullCalendarModule
    
  ],
  providers: [
    AuthService,
    ContentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
