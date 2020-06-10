import { Component, OnInit } from '@angular/core';
import { Employee } from "../../../models/employee";
import {EmployeeService} from '../../../services/employee.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployee: Employee ={
    employee_id : null,
    department: null,
    salary: null,
    job_level: null,
    gender: null,
    new_hire: null,
    vacation_days_taken:null,
    engagement: null,
    rating: null,
    accident_type: null,
    location: null,
    overtime_hours: null,
    year: null
  };
  

  constructor(private EmployeeService: EmployeeService,private router: Router) { }


  onSubmit(form: NgForm) {
      this.EmployeeService.postEmployee(this.selectedEmployee).subscribe(
        result => console.log("success submit: ", result),
        error => console.log("error: ",error),
      );
      this.router.navigate(['/employees']);
    }


  ngOnInit() {
   
  }
}
