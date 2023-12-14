import { Component, OnInit } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class SearchComponent{
  constructor() {}

  id : number | undefined;


  search(id_string: string): void {
    //Daten von einem eingabefeld sind immer ein string
    if(id_string.length == 0)
    {
      this.id = undefined;
      return;
    }

    this.id = parseInt(id_string);
  }
}
