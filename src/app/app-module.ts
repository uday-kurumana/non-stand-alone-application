import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminDashboardComponent } from './admin-dashboard.component/admin-dashboard.component';
import { DeptDashboardComponent } from './dept-dashboard.component/dept-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard.component/employee-dashboard.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    App,
    AdminDashboardComponent,
    DeptDashboardComponent,
    EmployeeDashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
