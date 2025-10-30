import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dept-dashboard',
  standalone: false,
  templateUrl: './dept-dashboard.component.html',
  styleUrls: ['./dept-dashboard.component.scss'],
})

// dept employee details component
export class DeptDashboardComponent implements OnInit {
  @Input() employeesData: IEmployeeDetails[] = [];

  employeesForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.employeesForm = this.formBuilder.group({
      //  deptLocation: [''],
      employeesArray: this.formBuilder.array([
        this.formBuilder.group({
          employeeId: [''],
          employeename: [''],
          deptId: [''],
          subDeptId: [''],
          designation: [''],
          managerID: [''],
          salary: [''],
          fullTime: [''],
        }),
      ]),
    });

    console.log('Received employee data: ', this.employeesData);
  }

  getEmployeesArrayControls() {
    return (this.employeesForm.get('employeesArray') as FormArray)?.controls;
  }
}


// (this.employeesForm.value as FormArray


 // this.employeesForm.controls['employeesArray'].controls     get('employeesArray')
