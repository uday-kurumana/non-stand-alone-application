import { Component } from '@angular/core';
import { DataService } from '../Test-services/data-service.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  departmentArray: IDepartment[] = [];
  clickedDepartment = false;
  selectedId: number | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    
       this.dataService.departments().subscribe((department) => {
      console.log('department item' + department[0].departmentName);
      console.log('department item' + JSON.stringify(department));
      console.log('before departmentarray  object before' + this.departmentArray);

      this.departmentArray = department;

      console.log('department data fetched successfully' + this.departmentArray);
    });
  
  }

  updateDepartment(departmentItem: IDepartment): void {
    console.log('department item to be edited' + JSON.stringify(departmentItem));
    if(this.clickedDepartment === false) {
          this.selectedId = departmentItem.id;
    this.clickedDepartment = true;
    } else {  
      this.clickedDepartment = false;
  }
}

  trackById(index: number, item: any): number {
    // this.selectedId = item.id;
    return item.id; // Assuming each item has a unique 'id' property
  }

//   handleForm(e: any) {
//     console.log('form submitted'+ JSON.stringify(e));

//     e.preventDefault();
//     return false;
// }


}
