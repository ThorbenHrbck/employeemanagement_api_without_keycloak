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
  
  @Input() inputId: number | undefined; //selected employee's id from employee-list-component

  disableButton: boolean = false;

  employee: Employee | undefined;

  btnNavigateToAddEmployeePage() : void
  {
    this.router.navigateByUrl("/add-employee");
  }

  btnNavigateToUpdateEmployeePage() : void
  {
    let id_string = this.inputId?.toString();
    this.router.navigateByUrl("/update-employee/" + id_string);
  }

  btnDeleteEmployee() : void 
  {
    if(this.inputId !== undefined)
    {
      this.employeeService.deleteEmployee(this.inputId).subscribe(employee => {this.employee = employee, 
        window.location.reload(); //reload page so it is easier to see for the user that something did happen
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isInputIdValid();
  }

  isInputIdValid() : void  
  {
    if(this.inputId !== undefined && this.inputId >= 1)
    {
      this.disableButton = false;
    }else
    {
      this.disableButton = true;
    }
  }
}
