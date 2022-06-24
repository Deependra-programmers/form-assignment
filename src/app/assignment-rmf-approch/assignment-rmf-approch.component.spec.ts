import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentRmfApprochComponent } from './assignment-rmf-approch.component';

describe('AssignmentRmfApprochComponent', () => {
  let component: AssignmentRmfApprochComponent;
  let fixture: ComponentFixture<AssignmentRmfApprochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentRmfApprochComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentRmfApprochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
