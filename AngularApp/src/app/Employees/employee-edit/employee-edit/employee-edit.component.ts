import { Component, OnInit } from '@angular/core';
import { Employee } from "../../../models/employee";
import {EmployeeService} from '../../../services/employee.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  product: Employee;
  errorMessage = '';
  private id : number;
  mySubscription: any;
    
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

  constructor(private route: ActivatedRoute,
    private EmployeeService: EmployeeService,private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
    }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
       this.selectedEmployee.employee_id= +param; //conversion 
       console.log(this.selectedEmployee.employee_id);
      //this.getProduct(this.selectedEmployee.id);
    }
  }
  
  onSubmit(form: NgForm) {
    console.log(this.selectedEmployee);
      this.EmployeeService.editEmployee(this.selectedEmployee).subscribe(
        result => console.log("success submit: ", result),
        error => console.log("error: ",error)
      ); 
      this.router.navigate(['/employees']);
    }

  ngOnDestroy() {
      if (this.mySubscription) {
        this.mySubscription.unsubscribe();
      }
    }

}
