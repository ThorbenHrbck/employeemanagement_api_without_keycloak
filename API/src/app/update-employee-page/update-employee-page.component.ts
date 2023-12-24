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
  
  id : number = 0;
  firstName : string = '';
  lastName : string = '';
  city : string = '';
  street : string = '';
  postcode : string = '';
  phone : string = '';

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router)
  {
    
  }

  ngOnInit(): void {
    this.id_string = this.route.snapshot.paramMap.get('id');
    console.log(this.id_string);
    if(this.id_string !== null)
    {
      this.employeeService.getEmployee(parseInt(this.id_string)).subscribe(employee => this.employee = employee);
      this.id = parseInt(this.id_string);
    }
  }

  btnReturnToHomePage() : void 
  {
    this.router.navigateByUrl("/home");
  }

  inputFirstName(firstName : string) : void
  {
    this.firstName = firstName;
    console.log(this.firstName);
  }

  inputLastName(lastName : string) : void
  {
      this.lastName = lastName;
      console.log(this.lastName);
  }

  inputCity(city : string) : void 
  {
    this.city = city;
    console.log(this.city);
  }

  inputStreet(street : string) : void 
  {
    this.street = street;
    console.log(this.street);
  }

  inputPostcode(postcode : string) : void 
  {
    this.postcode = postcode;
    console.log(this.postcode);
  }

  inputPhone(phone : string) : void
  {
    this.phone = phone;
    console.log(this.phone);
  }
}
