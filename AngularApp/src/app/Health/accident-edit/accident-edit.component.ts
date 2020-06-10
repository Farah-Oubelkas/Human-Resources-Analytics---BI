import { Component, OnInit } from '@angular/core';
import { Accident } from "../../models/accident";
import {AccidentService} from '../../services/accident.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-accident-edit',
  templateUrl: './accident-edit.component.html',
  styleUrls: ['./accident-edit.component.css']
})
export class AccidentEditComponent implements OnInit {

  accident: Accident;
  errorMessage = '';
  private id : number;
  mySubscription: any;
    
  selectedAccident: Accident ={
    accident_id : null,
    employee_id : null,
    accident_type: null,
    location: null,
    overtime_hours: null,
    year: null
  };

  constructor(private route: ActivatedRoute,
    private AccidentService: AccidentService,private router: Router) { 
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
       this.selectedAccident.employee_id= +param;
       this.selectedAccident.accident_id = this.selectedAccident.employee_id; //conversion 
      //this.getProduct(this.selectedAccident.id);
    }
  }
  
  onSubmit(form: NgForm) {
    console.log(this.selectedAccident);
      this.AccidentService.editAccident(this.selectedAccident).subscribe(
        result => console.log("success submit: ", result),
        error => console.log("error: ",error)
      ); 
      this.router.navigate(['/accident']);
    }

  ngOnDestroy() {
      if (this.mySubscription) {
        this.mySubscription.unsubscribe();
      }
    }


}
