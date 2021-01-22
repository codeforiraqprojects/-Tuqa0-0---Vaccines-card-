import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacciontablePage } from './vacciontable.page';

describe('VacciontablePage', () => {
  let component: VacciontablePage;
  let fixture: ComponentFixture<VacciontablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacciontablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacciontablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
