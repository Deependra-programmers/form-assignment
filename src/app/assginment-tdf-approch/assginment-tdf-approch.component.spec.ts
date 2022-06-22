import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginmentTdfApprochComponent } from './assginment-tdf-approch.component';

describe('AssginmentTdfApprochComponent', () => {
  let component: AssginmentTdfApprochComponent;
  let fixture: ComponentFixture<AssginmentTdfApprochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssginmentTdfApprochComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssginmentTdfApprochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
