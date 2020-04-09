import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrationListofUserComponent } from './adminstration-listof-user.component';

describe('AdminstrationListofUserComponent', () => {
  let component: AdminstrationListofUserComponent;
  let fixture: ComponentFixture<AdminstrationListofUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstrationListofUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstrationListofUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
