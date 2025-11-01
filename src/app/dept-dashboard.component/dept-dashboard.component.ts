import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() returnToAdmin = new EventEmitter<any>();
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

    // iterate  on emp data   employeesData and patch values to formarray

    const employeesFormArray = this.employeesForm.get('employeesArray') as FormArray;
    employeesFormArray.clear(); // Clear existing controls
    this.employeesData.forEach((employee) => {
      employeesFormArray.push(
        this.formBuilder.group({
          employeeId: [employee.employeeId],
          employeename: [employee.employeename],
          deptId: [employee.deptId],
          subDeptId: [employee.subDeptId],
          designation: [employee.designation],
          managerID: [employee.managerID],
          salary: [employee.salary],
          fullTime: [employee.fullTime],
        })
      );
    });

    //  patch form values if needed
    //
    //

    // this.employeesForm.patchValue({
    //     deptId: departmentItem.deptId,
    //     departmentName: departmentItem.departmentName,
    //     subDeptId: departmentItem.subDeptId,
    //     departmentIncharge: departmentItem.departmentIncharge,
    //     subDepartmentName: departmentItem.subDepartmentName,
    //     subDepartmentIncharge: departmentItem.subDepartmentIncharge,
    //   });

    console.log('Received employee data: ', this.employeesData);
  }

  getEmployeesArrayControls() {
    return (this.employeesForm.get('employeesArray') as FormArray)?.controls;
  }

 
returnToAdminPage(): void {
    console.log('Returning to Admin Dashboard');
    this.returnToAdmin.emit( {"showDeptTable": true} );
  }
}




// (this.employeesForm.value as FormArray


 // this.employeesForm.controls['employeesArray'].controls     get('employeesArray')
