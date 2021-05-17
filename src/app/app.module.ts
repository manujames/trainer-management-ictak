import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDataTableComponent } from './admin-data-table/admin-data-table.component';
import { AdminNavbarsComponent } from './admin-navbars/admin-navbars.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
