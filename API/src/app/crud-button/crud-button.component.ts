import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-button',
  templateUrl: './crud-button.component.html',
  styleUrls: ['./crud-button.component.css']
})
export class CrudButtonComponent implements OnChanges{
  constructor(private employeeService: EmployeeService,
    private router: Router)
  {}
  
  @Input() input_id: number | undefined;

  disable_button: boolean = false;

  employee: Employee | undefined;

  btnNavigateToAddEmployeePage() : void
  {
    this.router.navigateByUrl("/add-employee");
  }

  btnNavigateToUpdateEmployeePage() : void
  {
    this.router.navigateByUrl("/update-employee");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.input_id);
    this.isInputIdValid();
  }

  isInputIdValid() : void  
  {
    if(this.input_id !== undefined && this.input_id >= 1)
    {
      this.disable_button = false;
    }else
    {
      this.disable_button = true;
    }
  }
}
