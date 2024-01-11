import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.css']
})
export class AddEmployeePageComponent implements OnInit{

  id: number = 0;
  firstName : string = '';
  lastName : string = '';
  city : string = '';
  street : string = '';
  postcode : string = '';
  phone : string = '';

  isNewTextTypedIn : boolean = false;
  failedToAddEmployee : boolean = false;

  employees : Employee[] = [];

  newEmployee : Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private title: Title)
    {
      this.title.setTitle("Hinzufügen")
    }

  ngOnInit(): void {
    this.getNextId();
  }

  //searches the last ID from the employee list and then adds 1 - number will be shown in inputBoxId
  getNextId() : void
  {
    this.employeeService.getEmployees().subscribe(employees => {this.employees = employees;
      let employee;
      for(let i = 0; i < this.employees.length; i++)
      {
        employee = this.employees[i];
        if(employee && employee.id)
        {
          if(this.id - 1 < employee.id)
          {
            this.id = employee.id + 1;
          }
        }
      }
    })
  }

  inputFirstName(firstName : string) : void
  {
    this.firstName = firstName;
    this.isNewTextTypedIn = false;
  }

  inputLastName(lastName : string) : void
  {
    this.lastName = lastName;
    this.isNewTextTypedIn = false;
  }

  inputCity(city : string) : void 
  {
    this.city = city;
    this.isNewTextTypedIn = false;
  }

  inputStreet(street : string) : void 
  {
    this.street = street;
    this.isNewTextTypedIn = false;
  }

  inputPostcode(postcode : string) : void 
  {
    this.postcode = postcode;
    this.isNewTextTypedIn = false;
  }

  inputPhone(phone : string) : void
  {
    this.phone = phone;
    this.isNewTextTypedIn = false;
  }

  btnAddEmployee() : void
  {
    this.newEmployee.id = this.id;
    this.newEmployee.firstName = this.firstName;
    this.newEmployee.lastName = this.lastName;
    this.newEmployee.city = this.city;
    this.newEmployee.street = this.street;
    this.newEmployee.postcode = this.postcode;
    this.newEmployee.phone = this.phone;

    //After successfull adding of the employee the next ID will be searched and a text will be shown
    this.employeeService.addEmployee(this.newEmployee).subscribe(() => {this.ngOnInit(); //triggers on success
      this.isNewTextTypedIn = true;
      this.failedToAddEmployee = false;}, 
      () => {this.isNewTextTypedIn = false; //triggers on failure
      this.failedToAddEmployee = true});
  }

  btnEmptyInputFields() : void 
  {
    this.firstName = '';
    this.lastName = '';
    this.city = '';
    this.street = '';
    this.postcode = '';
    this.phone = '';
  }

  //if any inputBox has nothing in it the add button will be disabled
  disableButton() : boolean
  {
    if(this.firstName.length === 0)
    {
      return true;
    }

    if(this.lastName.length === 0)
    {
      return true;
    }

    if(this.city.length === 0)
    {
      return true;
    }

    if(this.street.length === 0)
    {
      return true;
    }

    if(this.postcode.length === 0)
    {
      return true;
    }

    if(this.phone.length === 0)
    {
      return true;
    }
    return false;
  }

  btnReturnToHomePage() : void 
  {
    this.router.navigateByUrl("/home");
  }
}
