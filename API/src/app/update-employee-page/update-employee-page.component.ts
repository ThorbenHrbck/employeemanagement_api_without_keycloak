import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee-page',
  templateUrl: './update-employee-page.component.html',
  styleUrls: ['./update-employee-page.component.css']
})
export class UpdateEmployeePageComponent {

  private id: string | null;
  constructor(private route: ActivatedRoute)
  {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
