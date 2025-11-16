import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../Test-services/data-service.service';
import { CreateDepartment } from './create-department/create-department';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard-alternate.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  departmentArray: IDepartment[] = [];
  clickedDepartment = new FormControl<boolean>(false);
  selectedId: number | null = null;
  changeText = 'Edit';
  departmentForm!: FormGroup;
  employeeDataArray: IEmployeeDetails[] = [];
  showDeptTable: boolean = true;
  createDepartment: boolean = false;

  @ViewChild('createDeptComp', { static: false }) createDept!: CreateDepartment;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.departmentForm = new FormGroup({
      deptId: new FormControl({ value: '', disabled: true }, Validators.required),
      departmentName: new FormControl('', Validators.required),
      subDeptId: new FormControl('', Validators.required),
      departmentIncharge: new FormControl('', Validators.required),
      subDepartmentName: new FormControl('', Validators.required),
      subDepartmentIncharge: new FormControl('', Validators.required),
    });

    this.dataService.departments().subscribe((department) => {
      console.log('department item' + department[0].departmentName);
      console.log('department item' + JSON.stringify(department));
      console.log('before departmentarray  object before' + this.departmentArray);

      this.departmentArray = department;

      console.log('department data fetched successfully' + this.departmentArray);
    });

    this.clickedDepartment.valueChanges.subscribe((value: boolean | null) => {
      console.log('clickedDepartment value changed: ' + value);
    });
  }

  showEmployees(departmentItem?: IDepartment): void {
    this.employeeDataArray = departmentItem?.employees ?? [];
    this.showDeptTable = !this.showDeptTable;
  }

  showDepartments(event: any): void {
    console.log('Event received from DeptDashboardComponent: ', event);

    this.showDeptTable = true;
  }

  returnToAdminPage(event: any): void {
    console.log('Event received from CreateDepartmentComponent: ', event);
    this.createDepartment = false;
    this.showDeptTable = true;
  }

  updateDepartment(departmentItem: IDepartment, departmentForm: FormGroup, event: any): void {
    console.log('department item to be edited' + JSON.stringify(departmentItem));
    if (this.clickedDepartment.value === false) {
      this.selectedId = departmentItem.deptId;
      // assigning/binding the form values to formcontrols
      this.departmentForm.patchValue({
        deptId: departmentItem.deptId,
        departmentName: departmentItem.departmentName,
        subDeptId: departmentItem.subDeptId,
        departmentIncharge: departmentItem.departmentIncharge,
        subDepartmentName: departmentItem.subDepartmentName,
        subDepartmentIncharge: departmentItem.subDepartmentIncharge,
      });
      this.clickedDepartment.setValue(true);
    } else {
      // on update, collect the updated values from the formcontrols
      const updatedDepartment: IDepartment = {
        deptId: this.departmentForm.get('deptId')?.value,
        departmentName: this.departmentForm.get('departmentName')?.value,
        subDeptId: this.departmentForm.get('subDeptId')?.value,
        departmentIncharge: this.departmentForm.get('departmentIncharge')?.value,
        subDepartmentName: this.departmentForm.get('subDepartmentName')?.value,
        subDepartmentIncharge: this.departmentForm.get('subDepartmentIncharge')?.value,
      };


      this.clickedDepartment.setValue(false);
    }
  }

  trackById(index: number, item: any): number {
    // this.selectedId = item.deptId;
    return item.deptId; // Assuming each item has a unique 'deptId' property
  }

  openDepartmentPopup(): void {
    // on calling child initilaize its variables
    this.createDepartment = true;
    // calling method of child component
    // this.showDeptTable = false;
    // console.log(this.createDept.initilizeChildFlag  );
   }

  verifyChildInitialization(): void {
    console.log('AdminDashboardComponent: verifyChildInitialization called');
    console.log('CreateDepartment initilizeChildFlag: ' + this.createDept.initilizeChildFlag);
  }

  openPopup(): void {
    console.log('AdminDashboardComponent: openDepartmentPopup called');
    this.createDept.openDepartmentForm();
  }
}
















//   handleForm(e: any) {
//     console.log('form submitted'+ JSON.stringify(e));

//     e.preventDefault();
//     return false;
// }

// {
// formgroup {
//     formcontrol: {},
//     formgroup: {}
//     formarray : {
//         formcontrol: {
//         },
//         formgroup: {
//         }
//     }
// }
// }

// formgroup and formarray can be nested within each other to create complex forms. Each formcontrol represents a single input field, while formgroup is used to group related controls together. Formarray allows for dynamic addition and removal of controls or groups, making it useful for scenarios like lists or collections of items.
// import { FormGroup, FormControl, FormArray } from '@angular/forms';

// const myForm = new FormGroup({
//   personalDetails: new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//   }),
//   addresses: new FormArray([
//     new FormGroup({
//       street: new FormControl(''),
//       city: new FormControl(''),
//       zipCode: new FormControl(''),
//     }),
//   ]),
// });


// this.dataService.updateDepartment(updatedDepartment).subscribe((response) => {
//   console.log('Department updated successfully: ' + JSON.stringify(response));
//   const index = this.departmentArray.findIndex((dept) => dept.deptId === response.deptId);
//   if (index !== -1) {
//     this.departmentArray[index] = response;
//   }
// });
