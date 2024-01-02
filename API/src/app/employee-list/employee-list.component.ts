import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges{

  employees: Observable<Employee[]> | undefined;
  employee: Employee | undefined;

  highlightRow: number = 0; //row that should be highlighted when clicked on it

  @Output() selectedIdEmit = new EventEmitter<number | undefined>(); //emitter to send the selected employee id back to home-page-component

  @Input() idString: string | null | undefined; //searched id from  employee-search-component

  constructor(private employeeService: EmployeeService) {
    
  }

  ngOnInit(): void {
    this.highlightRow = -1; //resets the highlighted row so it does not show whenever a searched id is given

    //if true then only 1 employee is shown, else every employee is shown
    if(this.idString?.length !== 0 && this.idString !== '0' && this.idString !== undefined && this.idString !== null)
    {
      this.employeeService.getEmployee(parseInt(this.idString)).subscribe(employee => this.employee = employee);
      this.employees = of([]);
    }else
    {
      this.employee = undefined;
      this.employees = this.employeeService.getEmployees(); 
    }
    this.selectedIdEmit.emit(-1);
  }

  //when highlightedRow matches the index on the table in html then that row will be highlighted
  ClickedRow(index: number, selected_id: number = 0) : void
    {
      this.highlightRow = index; 
      this.selectedIdEmit.emit(selected_id);
    }
    
    //triggers when idString is changed
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
}
