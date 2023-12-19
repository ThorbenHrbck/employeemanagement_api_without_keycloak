import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private swaggerURL = 'http://localhost:8089/employees';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json' })}

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.swaggerURL, this.httpOptions);
  }

  getEmployee(id: number): Observable<Employee[]>
  {
    const url = `${this.swaggerURL}/${id}`;
    return this.http.get<Employee[]>(url, this.httpOptions);
  }

  searchEmployee(id: number): Observable<Employee[]> {
    const url = `${this.swaggerURL}/${id}`;
    return this.http.get<Employee[]>(url, this.httpOptions);
  }

  /** POST: add a new employee to the server */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.swaggerURL, employee, this.httpOptions)
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.swaggerURL}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions)
  }

  /** PUT: update the employee on the server */
  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.swaggerURL}/${employee.id}`;
    return this.http.put<Employee>(url, employee, this.httpOptions)
  }

}
