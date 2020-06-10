import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './Employees/employee-list/employee-list.component';
import { AccidentComponent } from './Health/accident/accident.component';
import { PerformanceComponent } from './Recruitement/performance.component';
import { EmployeeService } from './services/employee.service';
import { AccidentService } from './services/accident.service';
import { RecruitementService } from './services/recruitment.service';
import { EmployeeAddComponent } from './Employees/employee-add/employee-add/employee-add.component';
import { EmployeeEditComponent } from './Employees/employee-edit/employee-edit/employee-edit.component';
import { AccidentAddComponent } from './Health/accident-add/accident-add.component';
import { AccidentEditComponent } from './Health/accident-edit/accident-edit.component';
import { RecruitmentAddComponent } from './Recruitement/recruitment-add/recruitment-add.component';
import { RecruitmentEditComponent } from './Recruitement/recruitment-edit/recruitment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    EmployeeListComponent,
    AccidentComponent,
    PerformanceComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    AccidentAddComponent,
    AccidentEditComponent,
    RecruitmentAddComponent,
    RecruitmentEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [EmployeeService,AccidentService,RecruitementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
