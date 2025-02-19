import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private swaggerURL = 'http://localhost:8089/employees';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private http: HttpClient) { }

  /** GET: gets a list of employees from the server */
  getEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.swaggerURL, this.httpOptions);
  }

  /** GET: gets a employee from the server */
  getEmployee(id: number): Observable<Employee>
  {
    const url = `${this.swaggerURL}/${id}`;
    return this.http.get<Employee>(url, this.httpOptions);
  }

  /** POST: add a new employee to the server */
  addEmployee(employee: Employee): Observable<Employee> {
    const body = { id: employee.id,
    lastName: `${employee.lastName}`,
    firstName: `${employee.firstName}`,
    street: `${employee.street}`,
    postcode: `${employee.postcode}`,
    city: `${employee.city}`,
    phone: `${employee.phone}`}
    return this.http.post<Employee>(this.swaggerURL, body, this.httpOptions)
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.swaggerURL}/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions)
  }

  /** PUT: update the employee on the server */
  updateEmployee(employee: Employee): Observable<any> {
    const url = `${this.swaggerURL}/${employee.id}`;

    const body = { lastName: `${employee.lastName}`,
    firstName: `${employee.firstName}`,
    street: `${employee.street}`,
    postcode: `${employee.postcode}`,
    city: `${employee.city}`,
    phone: `${employee.phone}`}

    return this.http.put<any>(url, body, this.httpOptions);
  }
}
