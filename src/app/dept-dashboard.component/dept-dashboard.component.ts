import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { removeAllAppScopedEventListeners } from '@angular/core/primitives/event-dispatch';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dept-dashboard',
  standalone: false,
  templateUrl: './dept-dashboard.component.html',
  styleUrls: ['./dept-dashboard.component.scss'],
})

// dept employee details component
export class DeptDashboardComponent implements OnInit, OnChanges {
  @Input() employeesData: IEmployeeDetails[] = [];
  @Output() returnToAdmin = new EventEmitter<any>();
  employeesForm!: FormGroup;
  initializeOnChenges: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(): void {
    if (this.initializeOnChenges) {
      console.log('DeptDashboardComponent: ngOnChanges called with employeesData:  ', this.employeesData);
    }
  }
  ngOnInit(): void {

    this.employeesForm = this.formBuilder.group({
      //  deptLocation: [''],
      employeesArray: this.formBuilder.array([
        this.formBuilder.group({
          employeeId: [''],
          employeeName: [''],
          deptId: [''],
          subDeptId: [''],
          designation: [''],
          managerId: [''],
          salary: [''],
          fullTime: [''],
        }),
      ]),
    });

    // iterate  on emp data   employeesData and patch values to formarray

    let employeesFormArray = this.employeesForm.get('employeesArray') as FormArray;
    employeesFormArray.clear(); // Clear existing controls
    this.employeesData.forEach((employee) => {
      employeesFormArray.push(
        this.formBuilder.group({
          employeeId: [{ value: employee.employeeId, disabled: true }],
          employeeName: [{ value: employee.employeeName, disabled: true }],
          deptId: [{ value: employee.deptId, disabled: true }],
          subDeptId: [{ value: employee.subDeptId, disabled: true }],
          designation: [{ value: employee.designation, disabled: true }],
          managerId: [{ value: employee.managerId, disabled: true }],
          salary: [{ value: employee.salary, disabled: true }],
          fullTime: [{ value: employee.fullTime, disabled: true }],
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
    this.initializeOnChenges = true;
  }

  getEmployeesArrayControls() {
    return (this.employeesForm.get('employeesArray') as FormArray)?.controls;
  }


  returnToAdminPage(): void {
    console.log('Returning to Admin Dashboard');
    this.returnToAdmin.emit(
      { 
      "showDeptTable": true , 
     "employeeDetails":this.employeesData
    }
  );
  }

  addItemMethod(): void {
    let employeesFormArray = this.employeesForm.get('employeesArray') as FormArray;
    employeesFormArray.push(
      this.formBuilder.group({
        employeeId: [''],
        employeeName: [''],
        deptId: [''],
        subDeptId: [''],
        designation: [''],
        managerId: [''],
        salary: [''],
        fullTime: [''],
      })
    );
  }

  deleteItemMethod(): void {
    let employeesFormArray = this.employeesForm.get('employeesArray') as FormArray;
    if (employeesFormArray.length > 0) {
      employeesFormArray.removeAt(employeesFormArray.length - 1);
    }

  }
}




// (this.employeesForm.value as FormArray


// this.employeesForm.controls['employeesArray'].controls     get('employeesArray')

//  push , pop and removeAt methods on FormArray
