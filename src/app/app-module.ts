import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminDashboardComponent } from './admin-dashboard.component/admin-dashboard.component';
import { DeptDashboardComponent } from './dept-dashboard.component/dept-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard.component/employee-dashboard.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDepartment } from './admin-dashboard.component/create-department/create-department';
import { DeptDetailsDialog } from './admin-dashboard.component/create-department/dept-details-dialog/dept-details-dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    App,
    AdminDashboardComponent,
    DeptDashboardComponent,
    EmployeeDashboardComponent,
    CreateDepartment,
    DeptDetailsDialog
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
     MatInputModule        
   ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
