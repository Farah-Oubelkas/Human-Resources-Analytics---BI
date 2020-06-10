import { Component, OnInit } from '@angular/core';
import { Accident } from "../../models/accident";
import {AccidentService} from '../../services/accident.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-accident-add',
  templateUrl: './accident-add.component.html',
  styleUrls: ['./accident-add.component.css']
})
export class AccidentAddComponent implements OnInit {
  
  Accidents: Accident[] = [];
  selectedAccident: Accident ={
    accident_id : null,
    employee_id : null,
    accident_type: null,
    location: null,
    overtime_hours: null,
    year: null
  };
  

  constructor(private AccidentService: AccidentService,private router: Router) { }


  onSubmit(form: NgForm) {
    this.selectedAccident.accident_id = this.selectedAccident.employee_id;
      this.AccidentService.postAccident(this.selectedAccident).subscribe(
        result => console.log("success submit: ", result),
        error => console.log("error: ",error),
      ); 
      this.router.navigate(['/accident']);
    }


  ngOnInit() {
   
  }
}
