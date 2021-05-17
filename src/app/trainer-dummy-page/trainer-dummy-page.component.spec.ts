import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDummyPageComponent } from './trainer-dummy-page.component';

describe('TrainerDummyPageComponent', () => {
  let component: TrainerDummyPageComponent;
  let fixture: ComponentFixture<TrainerDummyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerDummyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerDummyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
