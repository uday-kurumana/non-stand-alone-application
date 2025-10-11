import { Component } from '@angular/core';
import { DataService } from '../Test-services/data-service.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  departmentArray: IDepartment[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.departments().subscribe(department => {   
      console.log("department item"+department[0].departmentName);
      console.log("department item"+JSON.stringify(department))
      console.log("before departmentarray  object before"+this.departmentArray);


      this.departmentArray  = department;
      
      
      console.log("department data fetched successfully"+this.departmentArray);
    }); 

}
}
