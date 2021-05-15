import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    EnrollFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
