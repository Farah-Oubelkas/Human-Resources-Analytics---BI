import { Component, OnInit } from '@angular/core';
import { Recruitment } from "../../models/recruitement";
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import {RecruitementService} from '../../services/recruitment.service';

@Component({
  selector: 'app-recruitment-add',
  templateUrl: './recruitment-add.component.html',
  styleUrls: ['./recruitment-add.component.css']
})
export class RecruitmentAddComponent implements OnInit {
  Recruitments: Recruitment[] = [];
  selectedRecruitment: Recruitment ={
    id_recruitment : null,
    attrition : null,
    recruiting_source: null,
    sales_quota_pct: null,
    performance_rating: null
  };
  

  constructor(private RecruitmentService: RecruitementService,private router: Router) { }


  onSubmit(form: NgForm) {
    if(this.selectedRecruitment.attrition == 'Yes')
      this.selectedRecruitment.attrition =1;
    else
      this.selectedRecruitment.attrition = 0;
      
      this.RecruitmentService.postRecruitment(this.selectedRecruitment).subscribe(
        result => console.log("success submit: ", result),
        error => console.log("error: ",error),
      ); 
      this.router.navigate(['/performance']);
    }


  ngOnInit() {
   
  }
}
