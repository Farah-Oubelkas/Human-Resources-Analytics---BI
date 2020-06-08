import { Component, OnInit } from '@angular/core';
import {Employee} from "../../models/employee";
import { Router, NavigationEnd } from '@angular/router';
import {EmployeeService} from '../../services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  _listFilter = '';
  errorMessage = '';

  mySubscription: any;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }

  filteredEmployees: Employee[] = [];
  employees: Employee[] = [];

  constructor(private EmployeeService: EmployeeService,private router: Router) { 
    this.listFilter = 'Sales';
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

  performFilter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((Employee: Employee) =>
      Employee.department.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  RefreshEmployeeList(){
    this.EmployeeService.getEmployees().subscribe((res:any) => {
      this.employees= res as Employee[];
      this.filteredEmployees = this.employees;
    });
  }
  
  ngOnInit() : void{
    this.RefreshEmployeeList();
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.EmployeeService.deleteEmployee(_id).subscribe((res) => {
        this.RefreshEmployeeList();
        this.router.navigate(['/employees']);
      });
    }
  }

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}
}
