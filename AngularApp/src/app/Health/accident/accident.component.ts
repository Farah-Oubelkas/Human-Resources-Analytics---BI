import { Component, OnInit } from '@angular/core';
import {Accident} from "../../models/accident";
import { Router, NavigationEnd } from '@angular/router';
import {AccidentService} from '../../services/accident.service';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {
  _listFilter = '';
  errorMessage = '';

  mySubscription: any;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAccidents = this.listFilter ? this.performFilter(this.listFilter) : this.Accidents;
  }

  filteredAccidents: Accident[] = [];
  Accidents: Accident[] = [];

  constructor(private AccidentService: AccidentService,private router: Router) { 
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

  performFilter(filterBy: string): Accident[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Accidents.filter((Accident: Accident) =>
      Accident.accident_type.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  RefreshAccidentList(){
    this.AccidentService.getAccidents().subscribe((res:any) => {
      this.Accidents= res as Accident[];
      this.filteredAccidents = this.Accidents;
    });
  }
  
  ngOnInit() : void{
    this.RefreshAccidentList();
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.AccidentService.deleteAccident(_id).subscribe((res) => {
        this.RefreshAccidentList();
        this.router.navigate(['/Accidents']);
      });
    }
  }

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}
}
