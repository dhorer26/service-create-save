import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  employee: Employee = {
    name: null,
    phoneNumber: null
  };
  constructor(
     // tslint:disable-next-line: variable-name
     private _employeeService: EmployeeService// , private _router: Router
  ) {}

  saveEmployee(): void {
    console.log(this.employee);
    this._employeeService.save(this.employee);
    // this._router.navigate(['list']);
  }

  ngOnInit() {}
}
