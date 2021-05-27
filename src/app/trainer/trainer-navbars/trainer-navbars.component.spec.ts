import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerNavbarsComponent } from './trainer-navbars.component';

describe('TrainerNavbarsComponent', () => {
  let component: TrainerNavbarsComponent;
  let fixture: ComponentFixture<TrainerNavbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerNavbarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerNavbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
