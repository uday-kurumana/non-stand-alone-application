import { Component } from '@angular/core';
import { DataService } from '../Test-services/data-service.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(posts => {   
      console.log(posts);
    }); 

}
}
