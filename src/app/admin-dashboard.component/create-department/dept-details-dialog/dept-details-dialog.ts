import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dept-details-dialog',
  standalone: false,
  templateUrl: './dept-details-dialog.html',
  styleUrls: ['./dept-details-dialog.scss']
})
export class DeptDetailsDialog {
deptDetailsForm!: FormGroup<any> ;
  

  constructor(
    public dialogRef: MatDialogRef<DeptDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) { }

  ngOnInit(): void {
    this.deptDetailsForm = new FormGroup({
      food: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
    });
  }

  onNoClick(incomingValue: any): void {
    this.dialogRef.close(this.deptDetailsForm.value);
  }
}
