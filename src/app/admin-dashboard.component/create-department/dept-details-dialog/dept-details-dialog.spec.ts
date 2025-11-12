import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptDetailsDialog } from './dept-details-dialog';

describe('DeptDetailsDialog', () => {
  let component: DeptDetailsDialog;
  let fixture: ComponentFixture<DeptDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeptDetailsDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptDetailsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
