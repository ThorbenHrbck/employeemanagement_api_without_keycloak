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

  highlightRow: number = 0;
  selectedId: number | undefined;

  @Output() selected_id_emit = new EventEmitter<number | undefined>();

  @Input() id_string: string | null | undefined;

  constructor(private employeeService: EmployeeService) {
    
  }

  ngOnInit(): void {
    this.highlightRow = -1;
    if(this.id_string?.length !== 0 && this.id_string !== '0' && this.id_string !== undefined && this.id_string !== null)
    {
      this.employeeService.getEmployee(parseInt(this.id_string)).subscribe(employee => this.employee = employee);
      this.employees = of([]);
    }else
    {
      this.employee = undefined;
      this.employees = this.employeeService.getEmployees(); 
    }
    this.selected_id_emit.emit(-1);
  }

  ClickedRow(index: number) : void
    {
      this.highlightRow = index; 
      this.selectedId = index + 1;
      if(this.employee)
      {
        this.selectedId = this.employee.id;
      }

      this.selected_id_emit.emit(this.selectedId);
    }
    

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
}
