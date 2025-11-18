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
errorText: string = 'We are not serving this item currently.';

itemList: string[] = ['Pizza', 'Pasta', 'Parmesan', 'Salad', 'Soup'];
  errorFlag: boolean = false;
  

  constructor(
    public dialogRef: MatDialogRef<DeptDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) { }

  ngOnInit(): void {
    this.deptDetailsForm = new FormGroup({
      food: new FormControl('Pizza', Validators.required),
      comment: new FormControl('', Validators.required),
    });

     this.deptDetailsForm.valueChanges.subscribe(value => {
        console.log('Form value changed:', value);
        this.itemList.forEach(
          (item) => {
            if (item.toLowerCase() === value.food.toLowerCase()) {
              this.errorFlag = false;
              this.errorText = '';
            } else {
              this.errorFlag = true;
              this.errorText = 'We are not serving this item currently.';
            }
        })
      });
    }    

  onNoClick(incomingValue: any): void {
    this.dialogRef.close(this.deptDetailsForm.value);
  }


}
