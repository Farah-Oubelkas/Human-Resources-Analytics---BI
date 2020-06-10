import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable ,throwError } from "rxjs";
import { Recruitment } from "../models/recruitement";
import { catchError, tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';



@Injectable()
export class RecruitementService {
  readonly listUrl = "http://localhost:3000/recruitment";
  readonly addUrl = "http://localhost:3000/addrecruitment";
  readonly deleteUrl = "http://localhost:3000/deleterecruitment";
  readonly editUrl = "http://localhost:3000/updaterecruitmentDetails";

  constructor(public http: Http) { 
  }


/*   public getEmployees() {
    return this.http.get(this.employeeUrl)
    .pipe(map(res => res.json()));
  } */
  getRecruitments() {
    return this.http.get(this.listUrl)
    .pipe(map(res => res.json()));
  }

  
  getRecruitment(id: number) {
    return this.http.get(this.listUrl + `/${id}`)
    .pipe(map(res => res.json()));
  }

  postRecruitment(emp: Recruitment){
    return this.http.post(this.addUrl,emp);
  }

  
  editRecruitment(emp: Recruitment){
    return this.http.put(this.editUrl + `/${emp.id_recruitment}`, emp);
  }


  deleteRecruitment(_id: string) {
    return this.http.delete(this.deleteUrl + `/${_id}`);
  }


}