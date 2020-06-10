import { Component, OnInit } from '@angular/core';
import {Recruitment} from "../models/recruitement";
import { Router, NavigationEnd } from '@angular/router';
import {RecruitementService} from '../services/recruitment.service';
@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  _listFilter = '';
  errorMessage = '';

  mySubscription: any;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredRecruitment = this.listFilter ? this.performFilter(this.listFilter) : this.Recruitment;
  }

  filteredRecruitment: Recruitment[] = [];
  Recruitment: Recruitment[] = [];

  constructor(private RecruitmentService: RecruitementService,private router: Router) { 
    this.listFilter = '';
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

  performFilter(filterBy: string): Recruitment[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Recruitment.filter((Recruitment: Recruitment) =>
      Recruitment.recruiting_source.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  RefreshRecruitmentList(){
    this.RecruitmentService.getRecruitments().subscribe((res:any) => {
      this.Recruitment= res as Recruitment[];
      this.filteredRecruitment = this.Recruitment;
    });
  }
  
  ngOnInit() : void{
    this.RefreshRecruitmentList();
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.RecruitmentService.deleteRecruitment(_id).subscribe((res) => {
        this.RefreshRecruitmentList();
        this.router.navigate(['/performance']);
      });
    }
  }

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}
}
