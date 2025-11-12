import { ChangeDetectionStrategy, Component, EventEmitter, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeptDetailsDialog } from './dept-details-dialog/dept-details-dialog';

@Component({
  selector: 'app-create-department',
  standalone: false,
  templateUrl: './create-department.html',
  styleUrl: './create-department.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDepartment {
  
  returnToAdmin:  EventEmitter<any> = new EventEmitter<any>();
  constructor( private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('CreateDepartment: ngOnInit called');    
  }

  ngAfterViewInit(): void {
    console.log('CreateDepartment: ngAfterViewInit called');
    this.openDepartmentForm();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeptDetailsDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDepartmentForm(): void {  
    console.log('CreateDepartment: openDepartmentForm called');
    this.openDialog();
  }


}
