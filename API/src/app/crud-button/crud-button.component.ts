import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-button',
  templateUrl: './crud-button.component.html',
  styleUrls: ['./crud-button.component.css']
})
export class CrudButtonComponent {
  constructor(private employeeService: EmployeeService,
    private router: Router)
  {}
  employee: Employee | undefined;

  btnNavigateToAddEmployeePage() : void
  {
    this.router.navigateByUrl("/add-employee");
  }

  btnNavigateToUpdateEmployeePage() : void
  {
    this.router.navigateByUrl("/update-employee");
  }
}
