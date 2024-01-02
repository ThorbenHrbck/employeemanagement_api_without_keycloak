import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  
  public searchedIdString: string | null = '0'; //from employee-search-component
  public selectedEmployeeId: number | undefined = -1; //from selected employee in employee-list-component
  constructor() {}

  changeId(idString: string | null)
  {
    this.searchedIdString = idString;
  }

  changeSelectedEmployeeId(id: number | undefined)
  {
    this.selectedEmployeeId = id;
  }
}
