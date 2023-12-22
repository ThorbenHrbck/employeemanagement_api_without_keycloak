import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  
  public id: string | null;
  constructor(private route: ActivatedRoute)
  {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  change_id(id_string: string | null)
  {
    this.id = id_string;
  }
}
