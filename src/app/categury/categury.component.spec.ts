import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateguryComponent } from './categury.component';

describe('CateguryComponent', () => {
  let component: CateguryComponent;
  let fixture: ComponentFixture<CateguryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateguryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateguryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
