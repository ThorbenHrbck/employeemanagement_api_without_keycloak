import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Observable<Employee[]>;
  employee: Employee | undefined;

  constructor(private http: HttpClient, private employeeService: EmployeeServiceService) {
    this.employees = employeeService.getEmployees();

    this.employeeService.getEmployee(1).subscribe(employee => this.employee = employee);
    
  }

}
