    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { filter, map, Observable, flatMap } from 'rxjs';

    @Injectable({
      providedIn: 'root'
    })
    export class DataService {

      private apiUrl = 'http://localhost:3000';

      constructor(private http: HttpClient) { }

      getPosts(): Observable<any[]> {
              //  sbi/insurance/ NavigatorLogin
              // sbi/capital Markets/login
              // sbi/loans/applyLoan
              // sbi/cards/applyCreditCard
                    
        // `${this.apiUrl}  youtube    /posts`
        return this.http.get<any[]>(`${this.apiUrl}/posts`);
      }

      departments(): Observable<IDepartment[]> {
        return this.http.get<IDepartment[]>(`${this.apiUrl}/departments`);
      }

      departmentsData(): Observable<IDepartment[]> {
        return this.http.get<IDepartment[]>(`${this.apiUrl}/departments`).pipe(map(data => data)

        );
      }

      
      departmentsDatabyId(id: number): Observable<IDepartment | undefined> {
        return this.http.get<IDepartment[]>(`${this.apiUrl}/departments/${id}`).pipe(
          map((departments: IDepartment[]) => departments.find(dept => dept.deptId === id))
        );
      }

      getDepartmentById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/departments/${id}`); 
      }
      createDepartment(department: any): Observable<any> {

        return this.http.post<any>(`${this.apiUrl}/departments`, department);
      }  
      // Add other CRUD methods as needed

      updateDepartment(updatedDepartment: IDepartment)  : Observable<IDepartment> {
        return this.http.put<IDepartment>(`${this.apiUrl}/departments/${updatedDepartment.deptId}`, updatedDepartment);
        
      }
    }