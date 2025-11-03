import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-department',
  standalone: false,
  templateUrl: './create-department.html',
  styleUrl: './create-department.scss'
})
export class CreateDepartment {
  returnToAdmin:  EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {} 

}
