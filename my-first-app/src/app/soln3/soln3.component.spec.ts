import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Soln3Component } from './soln3.component';

describe('Soln3Component', () => {
  let component: Soln3Component;
  let fixture: ComponentFixture<Soln3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Soln3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Soln3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
