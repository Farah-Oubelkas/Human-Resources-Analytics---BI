import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable ,throwError } from "rxjs";
import { Employee } from "../models/employee";
import { catchError, tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';




@Injectable()
export class EmployeeService {
  readonly listUrl = "http://localhost:3000/getAllEmployees";
  readonly addUrl = "http://localhost:3000/addNewEmployee";
  readonly deleteUrl = "http://localhost:3000/deleteEmployee";
  readonly editUrl = "http://localhost:3000/updateEmployeeDetails";

  constructor(public http: Http) { 
  }


/*   public getEmployees() {
    return this.http.get(this.employeeUrl)
    .pipe(map(res => res.json()));
  } */
  getEmployees() {
    return this.http.get(this.listUrl)
    .pipe(map(res => res.json()));
  }

  
  getEmployee(id: number) {
    return this.http.get(this.listUrl + `/${id}`)
    .pipe(map(res => res.json()));
  }

  postEmployee(emp: Employee){
    return this.http.post(this.addUrl,emp);
  }

  
  editEmployee(emp: Employee){
    return this.http.put(this.editUrl + `/${emp.employee_id}`, emp);
  }


  deleteEmployee(_id: string) {
    return this.http.delete(this.deleteUrl + `/${_id}`);
  }


}