import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavbarsComponent } from './admin-navbars.component';

describe('AdminNavbarsComponent', () => {
  let component: AdminNavbarsComponent;
  let fixture: ComponentFixture<AdminNavbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavbarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
