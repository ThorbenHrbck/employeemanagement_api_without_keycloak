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
  
  @Input() input_id: number | undefined; //selected employee's id from employee-list-component

  disable_button: boolean = false;

  employee: Employee | undefined;

  btnNavigateToAddEmployeePage() : void
  {
    this.router.navigateByUrl("/add-employee");
  }

  btnNavigateToUpdateEmployeePage() : void
  {
    let id_string = this.input_id?.toString();
    this.router.navigateByUrl("/update-employee/" + id_string);
  }

  btnDeleteEmployee() : void 
  {
    if(this.input_id !== undefined)
    {
      this.employeeService.deleteEmployee(this.input_id).subscribe(employee => {this.employee = employee, 
        window.location.reload(); //reload page so it is easier to see for the user that something did happen
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
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
