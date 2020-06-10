import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable ,throwError } from "rxjs";
import { Accident } from "../models/accident";
import { catchError, tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';




@Injectable()
export class AccidentService {
  readonly listUrl = "http://localhost:3000/accident";
  readonly addUrl = "http://localhost:3000/addAccident";
  readonly deleteUrl = "http://localhost:3000/deleteAccident";
  readonly editUrl = "http://localhost:3000/updateAccidentDetails";

  constructor(public http: Http) { 
  }


/*   public getEmployees() {
    return this.http.get(this.employeeUrl)
    .pipe(map(res => res.json()));
  } */
  getAccidents() {
    return this.http.get(this.listUrl)
    .pipe(map(res => res.json()));
  }

  
  getAccident(id: number) {
    return this.http.get(this.listUrl + `/${id}`)
    .pipe(map(res => res.json()));
  }

  postAccident(emp: Accident){
    return this.http.post(this.addUrl,emp);
  }

  
  editAccident(emp: Accident){
    return this.http.put(this.editUrl + `/${emp.employee_id}`, emp);
  }


  deleteAccident(_id: string) {
    return this.http.delete(this.deleteUrl + `/${_id}`);
  }


}