import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './Test-services/data-service.service';
import { ContactForm } from './contact-form/contact-form';
import { AdminDashboardComponent } from './admin-dashboard.component/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent 
  },
  {
    path: 'app-contact-form',
    component: ContactForm
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DataService             
  ]
})
export class AppRoutingModule {

 
 }
