import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
 employees: IEmployee[];
  notifyDelete: any;
  empId: number;

  constructor(private _employeeService: EmployeeService, 
    private _router: Router,
    private _route: ActivatedRoute,) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      (listeEmployees) => this.employees = listeEmployees,
      (err) => console.log(err)
    );
    
  }

  editButtonClick(employeeId: number) {
    this._router.navigate(['/employees/edit', employeeId]);
  }

  deleteButtonClick(empAdetruire: number) {
    this._employeeService.deleteEmployee(empAdetruire+5).subscribe(
      () => console.log(`Employee with ID = ${empAdetruire} Deleted`),
      (err) => console.log(err)
    );
     // this.notifyDelete.emit(empAdetruire);
     window.location.reload();
  }

}
