import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  
  public searchedIdString: string | null = '0'; //from employee-search-component
  public selectedEmployeeId: number | undefined = -1; //from selected employee in employee-list-component
  constructor(private title: Title)
  {
    this.title.setTitle("Startseite")
  }

  changeId(idString: string | null)
  {
    this.searchedIdString = idString; //when the value changes the new value will be send to employee-list-component
  }

  changeSelectedEmployeeId(id: number | undefined)
  {
    this.selectedEmployeeId = id; //when the value changes the new value will be send to crud-button-component
  }
}
