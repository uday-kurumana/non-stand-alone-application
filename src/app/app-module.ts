import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminDashboardComponent } from './admin-dashboard.component/admin-dashboard.component';
import { DeptDashboardComponent } from './dept-dashboard.component/dept-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard.component/employee-dashboard.component';
import { MyComponent } from './my-component/my-component';

@NgModule({
  declarations: [
    App,
    AdminDashboardComponent,
    DeptDashboardComponent,
    EmployeeDashboardComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
