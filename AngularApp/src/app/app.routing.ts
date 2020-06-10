import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './Employees/employee-list/employee-list.component';
import { AccidentComponent } from './Health/accident/accident.component';
import { PerformanceComponent } from './Recruitement/performance.component';
import { EmployeeAddComponent } from './Employees/employee-add/employee-add/employee-add.component';
import { EmployeeEditComponent } from './Employees/employee-edit/employee-edit/employee-edit.component';
import { AccidentAddComponent } from './Health/accident-add/accident-add.component';
import { AccidentEditComponent } from './Health/accident-edit/accident-edit.component';
import { RecruitmentAddComponent } from './Recruitement/recruitment-add/recruitment-add.component';
import { RecruitmentEditComponent } from './Recruitement/recruitment-edit/recruitment-edit.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'employees',          component: EmployeeListComponent},
    { path: 'accident',     component: AccidentComponent },
    { path: 'performance',     component: PerformanceComponent},
    { path: 'addemp',     component: EmployeeAddComponent},
    { path: 'editemp/:id',     component: EmployeeEditComponent},
    { path: 'editacc/:id',     component: AccidentEditComponent},
    { path: 'addacc',     component: AccidentAddComponent},
    { path: 'editrec/:id',     component: RecruitmentEditComponent},
    { path: 'addrec',     component: RecruitmentAddComponent},

    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
