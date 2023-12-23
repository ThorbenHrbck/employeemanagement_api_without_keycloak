import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  
  public searched_id_string: string | null = '0';
  public selected_employee_id: number | undefined = -1;
  constructor() {}

  change_id(id_string: string | null)
  {
    this.searched_id_string = id_string;
  }

  change_selected_employee_id(id: number | undefined)
  {
    this.selected_employee_id = id;
    console.log(this.selected_employee_id);
  }
}
