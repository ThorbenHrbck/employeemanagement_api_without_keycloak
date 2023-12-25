import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee-page',
  templateUrl: './update-employee-page.component.html',
  styleUrls: ['./update-employee-page.component.css']
})
export class UpdateEmployeePageComponent implements OnInit{

  private id_string: string | null = '0';
  employee : Employee | undefined;

  isEmployeeUpdated : boolean = false;


  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router)
  {
    
  }

  ngOnInit(): void {
    this.id_string = this.route.snapshot.paramMap.get('id');
    if(this.id_string !== null)
    {
      this.employeeService.getEmployee(parseInt(this.id_string)).subscribe(employee => {this.employee = employee; 
      });
    }
  }

  btnReturnToHomePage() : void 
  {
    this.router.navigateByUrl("/home"); 
  }

  inputFirstName(firstName : string) : void
  {
    if(this.employee)
    {
      this.employee.firstName = firstName;
    }
    this.isEmployeeUpdated = false;
  }

  inputLastName(lastName : string) : void
  {
    if(this.employee)
    {
      this.employee.lastName = lastName;
    }
    this.isEmployeeUpdated = false;
  }

  inputCity(city : string) : void 
  {
    if(this.employee)
    {
      this.employee.city = city;
    }
    this.isEmployeeUpdated = false;
  }

  inputStreet(street : string) : void 
  {
    if(this.employee)
    {
      this.employee.street = street;
    }
    this.isEmployeeUpdated = false;
  }

  inputPostcode(postcode : string) : void 
  {
    if(this.employee)
    {
      this.employee.postcode = postcode;
    }
    this.isEmployeeUpdated = false;
  }

  inputPhone(phone : string) : void
  {
    if(this.employee)
    {
      this.employee.phone = phone;
    }
    this.isEmployeeUpdated = false;
  }

  disableButton() : boolean
  {
    if(this.employee)
    {
      if(!this.employee.firstName || this.employee.firstName.length === 0)
      {
        return true;
      }

      if(!this.employee.lastName || this.employee.lastName.length === 0)
      {
        return true;
      }

      if(!this.employee.city || this.employee.city.length === 0)
      {
        return true;
      }

      if(!this.employee.street || this.employee.street.length === 0)
      {
        return true;
      }

      if(!this.employee.postcode || this.employee.postcode.length === 0)
      {
        return true;
      }

      if(!this.employee.phone || this.employee.phone.length === 0)
      {
        return true;
      }
    }    
    return false;
  }

  btnUpdateEmployee() : void
  {
    console.log(this.employee?.firstName);
    console.log(this.employee?.lastName);
    console.log(this.employee?.city);
    console.log(this.employee?.street);
    console.log(this.employee?.postcode);
    console.log(this.employee?.phone);
    if(this.employee)
    {
      this.employeeService.updateEmployee(this.employee).subscribe(employee => this.employee = employee);
      this.isEmployeeUpdated = true;
    }
  }
}
