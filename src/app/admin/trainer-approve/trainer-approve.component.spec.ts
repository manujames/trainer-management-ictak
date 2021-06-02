import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerApproveComponent } from './trainer-approve.component';

describe('TrainerApproveComponent', () => {
  let component: TrainerApproveComponent;
  let fixture: ComponentFixture<TrainerApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
