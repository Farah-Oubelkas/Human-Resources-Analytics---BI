import { Component, OnInit } from '@angular/core';
import { Recruitment } from "../../models/recruitement";
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {RecruitementService} from '../../services/recruitment.service';

@Component({
  selector: 'app-recruitment-edit',
  templateUrl: './recruitment-edit.component.html',
  styleUrls: ['./recruitment-edit.component.css']
})
export class RecruitmentEditComponent implements OnInit {
  recruitment: Recruitment;
  errorMessage = '';
  private id : number;
  mySubscription: any;
    
  selectedRecruitment: Recruitment ={
    id_recruitment : null,
    attrition : null,
    recruiting_source: null,
    sales_quota_pct: null,
    performance_rating: null
  };

  constructor(private route: ActivatedRoute,
    private RecruitementService: RecruitementService,private router: Router) { 
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
       this.selectedRecruitment.id_recruitment= +param; //conversion 
      //this.getProduct(this.selectedAccident.id);
    }
  }
  
  onSubmit(form: NgForm) {
    if(this.selectedRecruitment.attrition == 'Yes')
    this.selectedRecruitment.attrition =1;
  else
    this.selectedRecruitment.attrition = 0;
    
      this.RecruitementService.editRecruitment(this.selectedRecruitment).subscribe(
        result => console.log("success submit: ", result),
        error => console.log("error: ",error)
      ); 
      this.router.navigate(['/performance']);
    }

  ngOnDestroy() {
      if (this.mySubscription) {
        this.mySubscription.unsubscribe();
      }
    }


}
