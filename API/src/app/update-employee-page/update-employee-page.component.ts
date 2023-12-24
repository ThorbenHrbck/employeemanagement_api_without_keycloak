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

  private id: string | null = '0';
  employee : Employee | undefined;
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router)
  {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id !== null)
    {
      this.employeeService.getEmployee(parseInt(this.id)).subscribe(employee => this.employee = employee);
    }
  }

  btnReturnToHomePage() : void 
  {
    this.router.navigateByUrl("/home");
  }
}
