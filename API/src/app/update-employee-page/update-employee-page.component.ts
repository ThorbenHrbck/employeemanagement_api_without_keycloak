import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-employee-page',
  templateUrl: './update-employee-page.component.html',
  styleUrls: ['./update-employee-page.component.css']
})
export class UpdateEmployeePageComponent implements OnInit{

  private idString: string | null = '0';
  employee : Employee | undefined;

  isEmployeeUpdated : boolean = false;

  firstName : string = '';
  lastName : string = '';
  city : string = '';
  street : string = '';
  postcode : string = '';
  phone : string = '';

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
    private title: Title)
  {
    this.title.setTitle("Bearbeiten")
  }

  ngOnInit(): void {
    this.idString = this.route.snapshot.paramMap.get('id');
    if(this.idString !== null)
    {
      //everything in .subscribe will be executed AFTER ngOnInit() is done
      this.employeeService.getEmployee(parseInt(this.idString)).subscribe(employee => {this.employee = employee; 
        if(this.employee && this.employee.firstName)
        {
          this.firstName = this.employee.firstName;
        }

        if(this.employee && this.employee.lastName)
        {
          this.lastName = this.employee.lastName;
        }

        if(this.employee && this.employee.city)
        {
          this.city = this.employee.city;
        }

        if(this.employee && this.employee.street)
        {
          this.street = this.employee.street;
        }

        if(this.employee && this.employee.postcode)
        {
          this.postcode = this.employee.postcode;
        }

        if(this.employee && this.employee.phone)
        {
          this.phone = this.employee.phone;
        }
        
      });
    }
  }

  btnReturnToHomePage() : void 
  {
    this.router.navigateByUrl("/home"); 
  }

  inputFirstName(firstName : string) : void
  {
    this.firstName = firstName;
    this.isEmployeeUpdated = false;
  }

  inputLastName(lastName : string) : void
  {
    this.lastName = lastName;
    this.isEmployeeUpdated = false;
  }

  inputCity(city : string) : void 
  {
    this.city = city;
    this.isEmployeeUpdated = false;
  }

  inputStreet(street : string) : void 
  {
    this.street = street;
    this.isEmployeeUpdated = false;
  }

  inputPostcode(postcode : string) : void 
  {
    this.postcode = postcode;
    this.isEmployeeUpdated = false;
  }

  inputPhone(phone : string) : void
  {
    this.phone = phone;
    this.isEmployeeUpdated = false;
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

  btnEmptyInputFields() : void 
  {
    this.firstName = '';
    this.lastName = '';
    this.city = '';
    this.street = '';
    this.postcode = '';
    this.phone = '';
  }

  btnUpdateEmployee() : void
  {
    if(this.employee)
    {
      this.employee.firstName = this.firstName;
      this.employee.lastName = this.lastName;
      this.employee.city = this.city;
      this.employee.street = this.street;
      this.employee.postcode = this.postcode;
      this.employee.phone = this.phone;

      //after successfully updating the employee a text will be shown that it was successful
      this.employeeService.updateEmployee(this.employee).subscribe(() => {this.isEmployeeUpdated = true;});
    }
  }
}
