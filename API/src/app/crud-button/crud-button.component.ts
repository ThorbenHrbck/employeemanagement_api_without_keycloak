import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-crud-button',
  templateUrl: './crud-button.component.html',
  styleUrls: ['./crud-button.component.css']
})
export class CrudButtonComponent {
  employee: Employee | undefined;
}
